from flask import Flask, render_template, request
from weather import main as get_weather

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    data = None
    error = None
    if request.method == 'POST':
        location = request.form['cityName']
        parts = location.split(',')
        if len(parts) == 1:
            city = parts[0].strip()
            region = None
        else:
            city = parts[0].strip()
            region = parts[1].strip()
        result, status_code = get_weather(city, region)
        if status == 200:
            data = result
        else:
            error = result['error']

    return render_template('index.html', data=data, error=error)

if __name__ == '__main__':
    app.run(debug=True)
