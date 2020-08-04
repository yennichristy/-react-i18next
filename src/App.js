import React, {useState} from 'react';
import './App.css';
//use the translation by importing...
import {useTranslation, Trans} from 'react-i18next'
//prime react ui library imports
import {Dropdown} from 'primereact/dropdown';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
//img assets
import Ko from './assets/ko.png'
import In from './assets/in.png'
import En from './assets/en.png'
import De from './assets/de.png'


const App = () => {
  //a function called t from React Hooks for translation the texts in React comp
  //use i18n to give user option to change the language
  const {t, i18n} = useTranslation(['translation', 'welcome', 'quotes']);
  //code from supported language(ISO 639-1)
  const change = code => {
    i18n.changeLanguage(code);
  }
  //mock data
  const languages = [
    {label: 'English', value:'English', img: En},
    {label: 'German', value:'German', img: De},
    {label: 'Indonesian', value:'Indonesian', img: In},
    {label: 'Korean', value:'Korean', img: Ko},
  ]
  const languageMap = {
    German: 'de',
    English: 'en',
    Indonesian: 'id',
    Korean: 'ko',
  };

  const [language, setLanguage] = useState('English');

  const onLanguageChange = (e) => {
    setLanguage(e.value);
    change(languageMap[e.value]);
  }

  //options display template
  const template = option => {
    if(!option.value) {
      return option.label
    } else {
      return (
        <div>
          <img src={option.img} alt='flag' style={{display:'inline-block', width: '30px', height: 
        '25px', margin:'5px 0 0 5px'}}></img>
        <span style={{float: 'right', margin:'.5em .25em 0 0'}}>{t(`translation:${languageMap[option.value]}`)}</span>
        </div>
      );
    }
  };

  return (
    <div className="App">
      <Dropdown value={language} options={languages} onChange={onLanguageChange} placeholder="Select languange" optionLabel='label' itemTemplate={template} style={{width: '12em'}}></Dropdown>
      {/* the first mandatory parameter is the translation key, the 2nd option named working text that will be the default if there is no key to the first parameter  */}
      <h1>{t('quotes:title', 'Kindness')}</h1>
      {/* Trans component for alternative usage that will helps with the interpolation of inner HTML elements  */}
      <p className="quotes">
        <Trans i18nKey="quotes:content.text"/>
      </p>
      <h4><Trans i18nKey="quotes:content.author"/></h4>
    </div>
  );
}

export default App;
