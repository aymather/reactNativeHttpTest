from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/', methods=['GET'])
def test():
    print('Got a  request')
    return jsonify({ 'msg': 'Hello World!' })

if __name__ == '__main__':
    app.run(debug=debug)