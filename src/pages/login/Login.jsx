import './login.scss'

function Login() {

    return (
      <div className='login'>
        <div className="card">
          <div className="left">
            <h1>Hello word</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit rem repellat ea modi dolorum sequi deserunt nisi minus ipsa distinctio consequuntur, odio ullam eaque iusto dolores veritatis numquam. Reprehenderit!
            </p>
            <span>Don't you have an account?</span>
            <button>Register</button>
          </div>
          <div className="right">
            <h1>Login</h1>
            <form>
              <input type="text" placeholder='Username' />
              <input type="password" placeholder='Password' />
              <button>Login</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
  
  export default Login
  