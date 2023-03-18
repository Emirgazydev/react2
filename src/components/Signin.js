import React from 'react';

const Signin = () => {
    return (
        <section id="sign"  >
            <div className="container">
                <div className="sign">
                    <div className="sign-block">
                        <div className="text">
                            <h1>Вход</h1>
                        </div>
                        <form id="tg">
                            <div className="inputs">
                                <input type="text" placeholder="Name"/>
                                <input type="password" placeholder="password"/>
                            </div>
                            <button type="submit" className="login">Entrance</button>
                        </form>
                        {/*<div className="liners">*/}
                        {/*    <div className="line"></div>*/}
                        {/*    <h2>ИЛИ</h2>*/}
                        {/*    <div className="line"></div>*/}
                        {/*</div>*/}
                        <div className="logo">
                        </div>
                        {/*<a href="#" className="password">Забыли пароль?</a>*/}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Signin;