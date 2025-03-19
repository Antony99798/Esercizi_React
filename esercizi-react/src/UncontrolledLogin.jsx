export default function UncontrolledLogin() {

    function onLogin(event){
        event.preventDefault()

        const username = event.target.elements.namedItem("username").value;
        const password = event.target.elements.namedItem("password").value;
        const remember = event.target.elements.namedItem("remember").checked;

        const data = {
            username,
            password,
            remember,
        }
        console.log(data)
    }
    function loginWithFormData(event){
        event.preventDefault();

        const formData = new FormData(event.target)

        const data = {
          username: formData.get("username"),
          password: formData.get("password"),
          remember: formData.get("remember") === 'on' ? true: false,
        };
         console.log(data);
    }

    return (
      <form onSubmit={loginWithFormData}>
        <input name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox"/>
        <button type="submit">Login</button>
      </form>
    );
}