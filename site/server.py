import http.server, socketserver, os, sys
class H(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        p = self.path.split('?')[0]
        if p != '/' and '.' not in os.path.basename(p) and os.path.exists(os.path.join(os.getcwd(), p.lstrip('/') + '.html')):
            q = self.path[len(p):]
            self.path = p + '.html' + q
        super().do_GET()
os.chdir(os.path.dirname(os.path.abspath(__file__)))
socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('', int(sys.argv[1]) if len(sys.argv) > 1 else 3000), H) as s:
    s.serve_forever()
