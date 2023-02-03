import React from "react";
import Faq from "react-faq-component";

const Support = () => {
    const data = {
        title: "FAQ",
        rows: [
            {
                title: "Как зовут главного любителя Redux?",
                content: "ИСКЕН!!!!!!!!!!!!!!!!!!!!!!!!!!",
            },
            {
                title: "Какая фамилия у Рената?",
                content: "АЛИМБЕЕЕЕЕЕЕКОООВ, ДААААААА!",
            },
            {
                title: "А у Санжара????",
                content: "КАДЫРКУЛООООВВ, ДААААА!",
            },
            {
                title: "Где служил Эрнас?",
                content: "В России!",
            },
            {
                title: "Для кого игра 'морской бой'?",
                content: "Для настоящих мужчин",
            },
        ],
    };
    return (
        <div className="support-content">
            <div className="support-header">
                <h1 className="support-title">SUPPORT</h1>
                <div className="faq">
                    <Faq data={data} />
                </div>
                <p className="support-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                    dolore, consectetur quo ad suscipit minima tempora tenetur
                    temporibus nobis deserunt repellat, quas ullam, numquam
                    reiciendis autem voluptates excepturi aspernatur rerum!
                </p>
            </div>
        </div>
    );
};

export default Support;
