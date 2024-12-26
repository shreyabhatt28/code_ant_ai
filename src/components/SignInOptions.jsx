import { useState } from 'react';
import '../pages/styles/LoginPage.css';
import darkLogo from '../assets/dark-logo.svg';

const tabOptions = [
    [
        {
            logo: '/github.png',
            text:'Sign In with Github'
        },
        {
            logo:'/bitbucket.png',
            text:'Sign In with Bitbucket'
        },
        {
            logo:'/azure.png',
            text:'Sign In with Azure Devops'
        },
        {
            logo:'/gitlab.png',
            text:'Sign In with GitLab'
        },
    ],
    [
        {
            logo:'/gitlab.png',
            text:'Self Hosted Gitlab'
        },
        {
            logo:'/key.svg',
            text:'Sign in with SSO'
        },
    ]
];

const SignInOptions = () => {

const [activeTab,setActiveTab] = useState(0);

    return(
    <div className='container'>
        <div className='section-1'>
            <div className='section-1-title'> <img src={darkLogo}/> Code Ant AI </div>
            <h2>Welcome to CodeAnt AI</h2>
            <div className='tab-buttons'>
                <div className={activeTab == 0 ? 'active-tab-button' : 'tab-button'} onClick={() => setActiveTab(0)}>
                    SAAS
                </div>
                <div className={activeTab == 1 ? 'active-tab-button' : 'tab-button'} onClick={() => setActiveTab(1)}>
                    Self Hosted
                </div>
            </div>
        </div>

        <div className='section-2'>
            {tabOptions[activeTab].map((item,index) => 
                <div className='login-option' key={index}>
                    <img className='login-option-icon' src={item.logo}/>
                    {item.text}
                </div>
            )}
        </div>
        
    </div>
)
}

export default SignInOptions;