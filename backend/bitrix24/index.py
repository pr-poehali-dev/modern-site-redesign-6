import json
import os
import urllib.request
import urllib.error
from typing import Dict, Any
from datetime import datetime


def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Business: Send lead to Bitrix24 CRM when user interacts with chat widget
    Args: event with httpMethod, body (action, channel, phone)
          context with request_id
    Returns: HTTP response with success status
    '''
    method: str = event.get('httpMethod', 'GET')
    
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method != 'POST':
        return {
            'statusCode': 405,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'Method not allowed'}),
            'isBase64Encoded': False
        }
    
    webhook_url = os.environ.get('BITRIX24_WEBHOOK_URL')
    if not webhook_url:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': 'BITRIX24_WEBHOOK_URL not configured'}),
            'isBase64Encoded': False
        }
    
    body_data = json.loads(event.get('body', '{}'))
    action = body_data.get('action', 'unknown')
    channel = body_data.get('channel', 'unknown')
    phone = body_data.get('phone', '+79850953131')
    user_agent = event.get('requestContext', {}).get('identity', {}).get('userAgent', 'Unknown')
    source_ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', 'Unknown')
    
    title = f'Обращение через {channel}'
    if action == 'qr_scan':
        title = 'Сканирование QR-кода'
    elif action == 'save_contact':
        title = 'Сохранение контакта'
    elif action == 'phone_click':
        title = 'Клик по телефону'
    
    lead_data = {
        'fields': {
            'TITLE': title,
            'NAME': 'Посетитель сайта',
            'PHONE': [{'VALUE': phone, 'VALUE_TYPE': 'WORK'}],
            'SOURCE_ID': 'WEB',
            'SOURCE_DESCRIPTION': f'Канал: {channel}, Действие: {action}',
            'COMMENTS': f'IP: {source_ip}\nUser Agent: {user_agent}\nВремя: {datetime.now().isoformat()}'
        }
    }
    
    try:
        bitrix_url = webhook_url.rstrip('/') + '/crm.lead.add.json'
        request = urllib.request.Request(
            bitrix_url,
            data=json.dumps(lead_data).encode('utf-8'),
            headers={'Content-Type': 'application/json'}
        )
        
        with urllib.request.urlopen(request, timeout=10) as response:
            result = json.loads(response.read().decode('utf-8'))
            
            return {
                'statusCode': 200,
                'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
                'body': json.dumps({'success': True, 'lead_id': result.get('result')}),
                'isBase64Encoded': False
            }
    
    except urllib.error.HTTPError as e:
        error_body = e.read().decode('utf-8')
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': f'Bitrix24 error: {error_body}'}),
            'isBase64Encoded': False
        }
    
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
            'body': json.dumps({'error': str(e)}),
            'isBase64Encoded': False
        }
