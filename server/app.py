from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Dummy studio data
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
    },
]

@app.route("/api/studios", methods=["GET"])
def get_studios():
    return jsonify(studios)

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
