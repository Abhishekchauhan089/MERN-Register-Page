import { useState } from 'react';
import { MdOutlineAccountCircle } from 'react-icons/md'
import { login } from './connect';

export default function Register({ setUser }) {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        name: ""
    })
    return (
        <div>
            <section className="login" >
                <div className="content" >
                    <div className="header" >
                        <div className="logo" >
                            <MdOutlineAccountCircle className='logo-account' />
                            <h3 className="heading" > Kayıt Ol</h3>

                        </div>

                    </div>
                    <form action='/register' method='post' onSubmit={(e) => {
                        e.preventDefault();
                        login(formData).then(res => console.log(res.data)).catch(err => console.log(err));
                    }} className="login-info" >
                        <div className="user-info" >
                            <input onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} name='name' className="login-input" type="text" required />
                            <span className="user" > İsim & Soyisim</span>

                        </div>
                        <div className="user-info">
                            <input onChange={(e) => { setFormData({ ...formData, mail: e.target.value }) }} name='mail' className="login-input" type="email" required />
                            <span className="user">E-mail</span>
                        </div>
                        <div className="user-info">
                            <input onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} name='password' className="login-input" type="password" required />
                            <span className="user">Şifre</span>
                        </div>
                        <div className="button">
                            <button className="login-btn" type="submit">Kayıt Ol</button>
                        </div>

                    </form>

                </div>

















            </section>






        </div>

    );
}