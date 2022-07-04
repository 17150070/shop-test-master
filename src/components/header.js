import React from "react";

export default function Header() {
    return(
        <header>
            <div>
                <span className='logo'>Продажа</span>
                <ul className='nav'>  {/* списки */}
                    <li>Про нас</li>  {/* то,что находится в списке */}
                    <li>Контакты</li>
                    <li>Кабинет</li>

                </ul>
            </div>
            <div className='presentation'></div>
        </header>
    )
}