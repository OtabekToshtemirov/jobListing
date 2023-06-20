import './card.css';


// eslint-disable-next-line react/prop-types
const Card = ({data1,filterList}) => {
    const data = data1;

    const handleFilter = (skill) => {
        filterList(skill);
    }

    


    return (
        <>
            <div className="cards">
                {data.map((data) => {
                        return (
                            <div className="cards__container" key={data.role}>
                                <div className={`flex ${data.featured ? 'isFeatured' : ""}`}
                                >
                                    <img src={data.logo} alt=""/>
                                    <div className="info">
                                        <p className="company">
                                            {data.company} {data.new ? <span className="new">New!</span> : ''}
                                        </p>

                                        {data.featured ? <span className="featured">Featured</span> : ''}<br/>
                                        <span className={"position"}>
                                            {data.position}
                                        </span><br/>
                                        {data.postedAt} <span className={"dot"}>.</span>
                                        {data.contract} <span className={"dot"}>.</span>
                                        {data.location}
                                    </div>
                                    <div className="languages">
                                        <span
                                            onClick={() => handleFilter(data.role)}
                                        > {data.role}</span>

                                        <span
                                            onClick={() => handleFilter(data.level)}
                                        > {data.level}</span>
                                        {data.tools.map((tool) => {
                                            return <span
                                                onClick={() => handleFilter(tool)}
                                                key={data.id}
                                            >{tool}</span>
                                        })
                                        }

                                        {data.languages.map((language) => {
                                            return <span
                                                onClick={() => handleFilter(language)}
                                                key={language}

                                            >{language}</span>
                                        })
                                        }

                                    </div>
                                </div>
                            </div>
                        )

                    }
                )
                }
            </div>
        </>


    );
};

export default Card;