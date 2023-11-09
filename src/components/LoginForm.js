const LoginForm = () => {

    const handleClick = () => {
        console.log('clicked')
    }
    return (
        <>
            Email: <input type="text" /> <br />
            Password: <input type="password" />

            <button onClick={handleClick}>Submit</button>
        </>
    )
}
export default LoginForm