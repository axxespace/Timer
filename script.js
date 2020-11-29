function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}
class Timer extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "sessionInc",











    () => {
      if (this.state.sessionCopy == this.state.session) {
        if (this.state.session < 3600)
        this.setState({
          session: this.state.session + 60,
          sessionCopy: this.state.sessionCopy + 60 });

      }
    });_defineProperty(this, "breakInc",

    () => {
      if (this.state.sessionCopy == this.state.session) {
        if (this.state.break < 3600)
        this.setState({
          break: this.state.break + 60,
          breakCopy: this.state.breakCopy + 60 });

      }
    });_defineProperty(this, "sessionDec",

    () => {
      if (this.state.sessionCopy == this.state.session) {
        if (this.state.session > 60)
        this.setState({
          session: this.state.session - 60,
          sessionCopy: this.state.sessionCopy - 60 });

      }
    });_defineProperty(this, "breakDec",

    () => {
      if (this.state.sessionCopy == this.state.session) {
        if (this.state.break > 60)
        this.setState({
          break: this.state.break - 60,
          breakCopy: this.state.breakCopy - 60 });

      }
    });_defineProperty(this, "tick",
    () => {
      if (this.state.sessionCopy > -1) {
        this.setState({
          sessionCopy: this.state.sessionCopy - 1,
          status: "session" });

        if (this.state.sessionCopy == -1) this.audio.play();
      } else
      {
        this.setState({
          breakCopy: this.state.breakCopy - 1,
          status: "break" });

        if (this.state.breakCopy == -1) {
          this.audio.play();
          this.setState({
            breakCopy: this.state.break,
            sessionCopy: this.state.session });

        }
      }
    });_defineProperty(this, "stopTick",

    () => {
      clearInterval(this.timerID);
    });_defineProperty(this, "startStop",

    () => {
      if (this.state.isRunning == false) {
        this.setState({
          isRunning: true });

        this.timerID = setInterval(() => this.tick(), 1000);
      } else
      {
        this.setState({
          isRunning: false });

        this.stopTick();
      }
    });_defineProperty(this, "reset",

    () => {
      this.setState({
        session: 1500,
        break: 300,
        sessionCopy: 1500,
        breakCopy: 300,
        isRunning: false,
        sum: this.state.break + this.state.session });

      this.stopTick();
    });this.state = { session: 1500, break: 300, sessionCopy: 1500, breakCopy: 300, isRunning: false, status: 'session' };}


  render() {
    const a1 = Math.floor(this.state.sessionCopy / 60);
    const a11 = a1 < 10 ? '0' + a1 : a1;
    const a2 = this.state.sessionCopy % 60;
    const a22 = a2 < 10 ? '0' + a2 : a2;
    const b1 = Math.floor(this.state.breakCopy / 60);
    const b11 = b1 < 10 ? '0' + b1 : b1;
    const b2 = this.state.breakCopy % 60;
    const b22 = b2 < 10 ? '0' + b2 : b2;
    return (
      React.createElement("div", null,
      React.createElement("div", { id: "break-label" },
      React.createElement("button", { id: "break-increment", onClick: this.breakInc }, "Break +1"),
      React.createElement("button", { id: "break-decrement", onClick: this.breakDec }, "Break -1"),
      React.createElement("h2", { id: "break-length" }, this.state.break / 60)),


      React.createElement("div", { id: "session-label" },
      React.createElement("button", { id: "session-increment", onClick: this.sessionInc }, "Session +1"),
      React.createElement("button", { id: "session-decrement", onClick: this.sessionDec }, "Session -1"),
      React.createElement("h2", { id: "session-length" }, this.state.session / 60)),

      React.createElement("audio", { id: "beep", src: "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav", ref: ref => this.audio = ref }),
      React.createElement("div", { id: "timer-label" },
      React.createElement("h1", null, this.state.status),
      React.createElement("h1", { id: "time-left" }, this.state.sessionCopy > -1 ? a11 + ':' + a22 : b11 + ':' + b22),
      React.createElement("button", { id: "start_stop", onClick: this.startStop }, "Start/Stop"),
      React.createElement("button", { id: "reset", onClick: this.reset }, "Reset"))));



  }}


ReactDOM.render(React.createElement(Timer, null), document.getElementById("timer"));