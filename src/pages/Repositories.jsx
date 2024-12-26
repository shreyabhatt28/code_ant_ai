import './styles/Repositories.css'

const repoData = [{
    id:'1',
    title:'design-system',
    access:'Public',
    tech:'React',
    size:'7320',
    lastUpdate:'1',
},
{
    id:'2',
    title:'codeant-ci-app',
    access:'Private',
    tech:'Javascript',
    size:'7320',
    lastUpdate:'1',
},
{
    id:'3',
    title:'analytics-dashboard',
    access:'Private',
    tech:'React',
    size:'7320',
    lastUpdate:'3',
},
{
    id:'4',
    title:'mobile-app',
    access:'Public',
    tech:'React',
    size:'7320',
    lastUpdate:'5',
},
{
    id:'5',
    title:'ecommerce',
    access:'Public',
    tech:'React',
    size:'7320',
    lastUpdate:'6',
},
{
    id:'6',
    title:'blog',
    access:'Public',
    tech:'React',
    size:'7320',
    lastUpdate:'7',
},
{
    id:'7',
    title:'social-network',
    access:'Private',
    tech:'React',
    size:'7320',
    lastUpdate:'8',
},
{
    id:'8',
    title:'chat-app',
    access:'Public',
    tech:'React',
    size:'7320',
    lastUpdate:'8',
},{
    id:'9',
    title:'design-system',
    access:'Private',
    tech:'React',
    size:'7320',
    lastUpdate:'8',
},
]

const Repositories = () => {
return(
    <div className="repo-main-container">
            <div className='repo-container-header'>
                <div className='header-div'>
                    <div className='header-upper-div'>
                        <div className='repo-page-info'>
                            <h2>Repositories</h2>
                            <p>33 total repositories</p>
                        </div>
                        <div className='repo-page-options'>
                            <button className='refresh'>Refresh All</button>
                            <button className='add-repo'>Add Repository</button>
                        </div>
                    </div>
                    <div className='header-lower-div'>
                        search..
                    </div>
                </div>
            </div>

            <div className='repo-list'>
            {repoData.map(item => (
                <div className='repo-list-item' key={item.id}>
                    <div className='repo-list-item-div'>
                    <div className='repo-item-upper-div'>
                        <p>{item.title}</p>
                        <div className='access-tag'>{item.access}</div>
                    </div>
                    <div className='repo-item-lower-div'>
                        <div className='tech-detail'>{item.tech}<div className='circle'></div></div>
                        <div className='repo-size'>{item.size} KB</div>
                        <p className='updated'>Updated {item.lastUpdate} {item.lastUpdate === "1" ? "day" : "days"} ago </p>
                    </div>
                </div>
                </div>
            ))}
            </div>
    </div>
)
}

export default Repositories