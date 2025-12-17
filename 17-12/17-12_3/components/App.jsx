import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <h2>Messages</h2>

      <MessageCard
        title="Welcome"
        message="Welcome to our React application!"
      />

      <MessageCard
        title="Reminder"
        message="Don't forget to submit your assignment."
      />

      <MessageCard
        title="Update"
        message="New features have been added."
      />

      <MessageCard
        title="Thank You"
        message="Thank you for using our app."
      />
    </div>
  );
}

export default App;
