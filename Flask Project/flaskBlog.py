from flask import Flask, render_template

app = Flask(__name__)

posts = [
    {
        'author': 'Shikher Jaitly',
        'title': 'Blog Post 1',
        'content':'First Blog content',
        'date_Posted':'March 3rd 2022'
    },
    {
        'author': 'Shikher Jaitly',
        'title': 'Blog Post 2',
        'content':'Second Blog content',
        'date_Posted':'March 4th 2022'
    }
]

@app.route("/")
@app.route("/home")
def home():
    return render_template('home.html',posts =posts)


@app.route("/about")
def about():
    return render_template('about.html')


if __name__ == "__main__":
    app.run(debug=True,host='localhost')