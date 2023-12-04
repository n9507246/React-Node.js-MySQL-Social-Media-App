import './register.scss'

function Register() {

  return (
    <div className='register'>
      <div className="card">
        <div className="left">
          <h1>My social</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae impedit rem repellat ea modi dolorum sequi deserunt nisi minus ipsa distinctio consequuntur, odio ullam eaque iusto dolores veritatis numquam. Reprehenderit!
          </p>
          <span>Do you have an account?</span>
          <button>Login</button>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Username' />
            <input type="text" placeholder='Name' />
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  )

}
  
  export default Register
  