from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class handler(BaseHTTPRequestHandler):
    def do_OPTIONS(self):
        self.send_response(200)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()
        
    def do_GET(self):
        if self.path == "/api/studios":
            studios = [
                {
                    "name": "Epic Designs",
                    "ratingImage": 1,
                    "description": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
                    "projects": 57,
                    "years": 8,
                    "price": "$$",
                    "phone1": "+91 - 984532853",
                    "phone2": "+91 - 984532854",
                    "shortlistIcon": 1
                },
                {
                    "name": "Studio - D3",
                    "ratingImage": 2,
                    "description": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
                    "projects": 43,
                    "years": 6,
                    "price": "$$$",
                    "phone1": "+91 - 984532853",
                    "phone2": "+91 - 984532854",
                    "shortlistIcon": 2
                }
            ]
            self.send_response(200)
            self.send_header('Content-type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')  # Allow requests from any origin
            self.send_header('Access-Control-Allow-Methods', 'GET')
            self.send_header('Access-Control-Allow-Headers', 'Content-Type')
            self.end_headers()
            self.wfile.write(json.dumps(studios).encode('utf-8'))
        else:
            self.send_response(404)
            self.end_headers()
            self.wfile.write(b"Not found")

if __name__ == "__main__":
    server = HTTPServer(('localhost', 5000), handler)
    print("Server running on http://localhost:5000")
    server.serve_forever()