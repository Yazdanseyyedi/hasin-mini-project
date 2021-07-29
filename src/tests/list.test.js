import React from 'react';
import {createStore} from "redux"
import {Provider} from "react-redux"
import { render as rtlRender,fireEvent,screen } from '@testing-library/react';
import "@testing-library/jest-dom"
import List from '../components/list/list';
import reducer from "../redux/reducer"
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';


import pulpfiction1 from '../assets/pulp-fiction-wallpaper-2560x1080_14 (1).jpg'
import pulpfiction2 from '../assets/pulp-fiction-wallpaper-preview.jpg'
import rickandmorty from '../assets/rick-and-morty-team-wallpaper-2560x1080_14.jpg'
import joker from '../assets/joker-movie-2019-wallpaper-2560x1080_14.jpg'
import fightclub from '../assets/fight club.jpg'


function renderWithRedux(component,{initialState,store = createStore(reducer, initialState),...renderOptions} = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions })
}

describe('reducer', () => {


  it("Renders <List /> component correctly",async () => {
    renderWithRedux(<Router history={history}> <List /></Router>,{initialState: {
        list:[
            {
                id:1,
                image: pulpfiction1,
                title: "داستان های عامه پسند 1",
                show: true
            },
            {
                id:2,
                image: pulpfiction2,
                title: "داستان های عامه پسند 2",
                show: true
            },
            {
                id:3,
                image: rickandmorty,
                title: "ریک و مورتی",
                show: true
            },
            {
                id:4,
                image: fightclub,
                title: "باشگاه مشت زنی",
                show: true
            },
            {
                id:5,
                image: joker,
                title: "جوکر",
                show: true
            }
        ],
        details:[
            {
                id:1,
                image: pulpfiction1,
                title: "داستان های عامه پسند 1",
                descriprtion: "داستان عامه‌پسند یا پالپ فیکشن (به انگلیسی: Pulp Fiction)؛ فیلمی آمریکایی، محصول سال ۱۹۹۴، به کارگردانی کوئنتین تارانتینو و در گونهٔ سینمای جنایی است. عمدهٔ شهرت فیلم به دلیل به نمایش درآوردن ترکیبی کنایه‌آمیز از خشونت و شوخ‌طبعی، داستان غیرخطی، اشاره‌های سینمایی، ارجاعات آن به فرهنگ عامه و دیالوگ‌های آن است."
            },
            {
                id:2,
                image: pulpfiction2,
                title: "داستان های عامه پسند 2",
                descriprtion: "داستان عامه‌پسند یا پالپ فیکشن (به انگلیسی: Pulp Fiction)؛ فیلمی آمریکایی، محصول سال ۱۹۹۴، به کارگردانی کوئنتین تارانتینو و در گونهٔ سینمای جنایی است. عمدهٔ شهرت فیلم به دلیل به نمایش درآوردن ترکیبی کنایه‌آمیز از خشونت و شوخ‌طبعی، داستان غیرخطی، اشاره‌های سینمایی، ارجاعات آن به فرهنگ عامه و دیالوگ‌های آن است."
            },
            {
                id:3,
                image: rickandmorty,
                title: "ریک و مورتی",
                descriprtion: "ریک و مورتی (به انگلیسی: Rick and Morty)، یک مجموعه تلویزیونی کمدی موقعیت انیمیشنی ویژه ردهٔ سنی بزرگسالان آمریکایی است که توسط جاستین رویلند و دن هارمون برای شبکه ادالت سویم تهیه شده‌است. داستان این سریال حول محور ریک، یک دانشمند دیوانهٔ دائم‌الخمر و مورتی اسمیت نوهٔ پریشان‌احوال و منزوی او که وقت خود را میان خانواده و ماجراجویی‌های علمی پدربزرگش تقسیم کرده، می‌گذرد."
            },
            {
                id:4,
                image: fightclub,
                title: "باشگاه مشت زنی",
                descriprtion: "باشگاه مبارزه (به انگلیسی: Fight Club) فیلمی آمریکایی، ساخته دیوید فینچر در سال ۱۹۹۹ میلادی و در ژانر درام-روانشناختی است که بر اساس رمانی با همین نام به قلم چاک پالانیک ساخته شده‌است. بازیگرانی همچون ادوارد نورتون، برد پیت و هلنا بونهام کارتر در فیلم نقش آفرینی کرده‌اند. نورتون در نقش یک انسان معمولی که از شغل دفتری معمولی خود ناراضی است ظاهر می‌شود. او به همراه تایلر داردن صابون‌سازی که نقشش را برد پیت ایفا می‌کند، یک «باشگاه مبارزه» را تشکیل می‌دهد و درگیر رابطه با او و زنی به نام مارلا سینگر که بونم کارتر نقشش را ایفا می‌کند، می‌شود."
            },
            {
                id:5,
                image: joker,
                title: "جوکر",
                descriprtion: "جوکر (به انگلیسی: Joker) یک شخصیت خیالی ابرشرور در کتاب‌های کمیک آمریکایی منتشر شده توسط دی‌سی کامیکس است. شخصیت جوکر توسط باب کین، جری رابینسون و بیل فینگر خلق شده‌است؛ که برای اولین بار در نخستین جلد کتاب‌های کمیک بتمن (۲۵ آوریل ۱۹۴۰) حضور پیدا کرد. او یکی از شخصیت‌های منفی داستان‌های بتمن است."
            }
        ],
    }
      });
    
    const deletebutton_rick = screen.getByTestId("3");
    const deletebutton_fight = screen.getByTestId("4");
    fireEvent.click(deletebutton_rick)

    expect(screen.queryByText(/ریک و مورتی/i)).toBeNull()
    expect(screen.queryByText(/باشگاه مشت زنی/i)).toBeInTheDocument()
    fireEvent.click(deletebutton_fight)

    expect(screen.queryByText(/ریک و مورتی/i)).toBeNull()
    expect(screen.queryByText(/باشگاه مشت زنی/i)).toBeNull()

  })
})