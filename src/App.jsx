import Card from "./components/Card.jsx";
import './App.css'
import originalData from './../data.json';
import  {useState} from 'react';


export const App = () => {
    const [data, setData] = useState(originalData);
    const [skills, setSkills] = useState([]);

    const filterList = (skill) => {
        document.querySelector('.searchbar').style.display = 'block';
        if (skills.includes(skill)) {
            return;
        }
        setSkills([...skills, skill]);

        setData(filterBySkills(originalData));
        console.log(data)
    }

    const handleRemove = (removedSkill) => {
        setSkills(skills.filter((s) => s !== removedSkill.target.value));
    }

    const clearFilter = () =>{
        setSkills([]);
        document.querySelector('.searchbar').style.display = 'none';
    }

    function filterBySkills(item) {
        // check if the item has any of the skills in the skills array
        return skills.some(skill => {
            return (
                item.role === skill ||
                item.level === skill ||
                item.languages.includes(skill) ||
                item.tools.includes(skill)
            );
        });
    }





    return (
        <div className="wrapper">
            <div className="nav"></div>
                <div className="container">
                    <div className="searchbar">
                        <div className="search">
                            <div className={"input"}>
                                {skills.map((skill) => {
                                    return <span key={skill} className={"filtered-skills"}>{skill}
                                    <button         className={"remove-button"}
                                        onClick={handleRemove}
                                        value={skill}
                                    >
                                        🞫
                                    </button>
                                    </span>
                                })}
                            </div>
                            <span className={'clear'}
                            onClick={clearFilter}
                            >Clear</span>
                        </div>
                    </div>
                </div>

            <div className="container">
                <main className="main">
                    <Card
                        data1={data}
                        filterList={filterList}

                    />
                </main>

            </div>

        </div>
    );
};