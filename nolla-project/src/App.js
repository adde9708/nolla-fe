import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Tweets } from "./components/Tweets";
import { TextArea } from "./components/TextArea";
import { CharacterCounter } from "./components/CharacterCounter";
import { SubmitAndResetButtons } from "./components/ResetAndHideButtons";
const GET_TWEETS_URL = "http://localhost:8080/fetchTweet";
const POST_TWEETS_URL = "http://localhost:8080/saveTweet";

class App extends Component {
  state = {
    tweet: "",
    tweets: [],
    charCounter: 0,
    limit: 200,
  };
  handleOnchange = ({ target }) => {
    const { value } = target;

    if (this.state.charCounter > this.state.limit - 1) {
      alert("Max characters reached");
    }

    this.setState({
      tweet: value,
      charCounter: value.length,
    });
  };

  handleOnClick = () => {
    alert(this.state.tweet);
  };
  reset = () => {
    this.setState({
      tweet: "",
      charCounter: 0,
    });
  };

  componentDidMount() {
    fetch(GET_TWEETS_URL, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((res) => this.setState({ tweets: res }))
      .catch((error) => console.log("error", error));
  }

  postATweet = () => {
    fetch(POST_TWEETS_URL, {

      method: 'POST',
      headers: { 'Content-Type': 'application/text' },
      body: this.state.tweet

    })
      .then((res) => {
        if (res.ok) {
          this.setState({ tweets: [{ content_twt: this.state.tweet }, ...this.state.tweets] });
          this.reset()
        } else {
          this.reset()
        }
      })
      .catch(() => {
        this.reset()
      })
  }
  render() {
    return (
      <div className="body-design">
        <Header name="Nolla Twitter" />
        <header className="header-design">
          <strong>Whats on your mind?</strong>
        </header>

        <br />
        <TextArea onChange={this.handleOnchange} textValue={this.state.tweet} />
        <div className="charCounter-design">
          <CharacterCounter
            counter={this.state.charCounter}
            limit={this.state.limit}
          />
        </div>
        <br />
        <SubmitAndResetButtons submitLabel="Submit" resetLabel="Reset" handleSubmit={this.postATweet} handleReset={this.reset} hideReset />
        {this.state.tweets.map((tweet, index) => (
          <Tweets
            key={index}
            tweet={tweet.content_twt}
            date={tweet.created_twt}

          />
        ))}

        <br />
        <Tweets tweet="Tweet" />
        <br />

        <Footer
          copyright="Copyright by Mcfluffin Burgers"
          company="Mcfluffin Burgers"
        />
      </div>
    );
  }
}

export default App;
