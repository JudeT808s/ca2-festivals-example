import LoginForm from "../components/LoginForm";

const Home = ({ authenticated, onAuthenticated }) => {
  return (
    <>
      <h1>Hi, this is home</h1>
      {!authenticated ? (
        <LoginForm authenticated={authenticated} onAuthenticated={onAuthenticated} />
      ) : (
        <p>You are authenticated</p>
      )}
    </>
  );
}

export default Home;
