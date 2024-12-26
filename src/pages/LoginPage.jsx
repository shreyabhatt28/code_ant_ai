import './styles/LoginPage.css';
import SignInOptions from '../components/SignInOptions';
import logo from '../assets/logo.svg';
import darkLogo from '../assets/dark-logo.svg';
import pieChart from '../assets/pie-chart-icon.svg'

const stats = [
    {stat:'30+',
    description:'Language Support'},
    {stat:'10K+',
    description:'Developers'},
    {stat:'100K+',
    description:'Hours Saved'},
    ]

const LoginPage = () => {
    return (
        <div className='page'>

            {/* left side */}
            <div className='left-side'>
                <img src={logo} className='logo' alt="Logo" />

                <div className='div-grp'>
                <div className='div-1'>
                    <div className='div-1-heading'>
                        <img src={darkLogo} className='div-1-logo'/>
                        <div className='div-1-title'>AI to Detect and Autofix Bad Code</div>
                    </div>

                    <div className='div-1-content'>
                        {stats.map(item => (
                            <div className='stat-div' key={item.description}>
                                <h3 className='stat-title'>{item.stat}</h3>
                                <p className='stat-description'>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='div-2'>
                    <div className='div-2-heading'>
                        <img src={pieChart}></img>
                        <div>
                            <h4 className='percentage'>14%</h4>
                            <p >This week</p>
                        </div>
                    </div>
                    <div className='div-2-content'>
                        <p>Issues Fixed</p>
                        <h2>500K+</h2>
                    </div>
                </div>
            </div>
            </div>

            {/* right side */}
            <div className='right-side'>
                <SignInOptions/>
                <p>By signing up you agree to the <span style={{fontWeight: 'bold'}}> Privacy Policy. </span> </p>
            </div>
        </div>
    );
}

export default LoginPage;
