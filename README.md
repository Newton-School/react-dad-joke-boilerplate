# Dad Jokes

Using the api <code>https://icanhazdadjoke.com/</code>, display the joke return from the request(api returns an object =, of which relevant key is <code>joke</code>).
To get json data, we need to set <code>accept</code> header to <code>application/json</code> then only it will work.

Inside the div#joke-holder display the joke, and when it is in loading state display <code>Joke loading...</code>.
When user first opens the app, it will display a joke and then user can get another joke on clicking the button#get-joke-btn.

