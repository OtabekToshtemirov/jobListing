import Card from "./components/Card.jsx";
import './App.css'
import originalData from './../data.json';
import {useState, useEffect} from 'react';
import {v4 as uuidv4} from 'uuid';


export const App = () => {
    const [data, setData] = useState(originalData);
    const [skills, setSkills] = useState([]);


    const filterList = (skill) => {
        if (!skills.includes(skill)) {
            setSkills([...skills, skill]);
        }

    }

    const handleRemove = (e) => {
        const skillToRemove = e.target.value;
        setSkills(skills.filter((skill) => skill !== skillToRemove));
    }

    const clearFilter = () => {
        setSkills([]);
        setData(originalData)
    }

    const updateData = () => {
        if (skills.length < 1) {
            setData(originalData);
        } else {
            const newData = originalData.filter((item) => {
                const allSkills = [...item.languages, ...item.tools, item.level, item.role];
                return skills.every((skill) => allSkills.includes(skill));
            });

            setData(newData);
        }
    }


    useEffect(() => {
        if (skills.length > 0) {
            updateData();
        } else {
            setData(originalData);
        }
    }, [skills])


    return (
        <div className="wrapper">
            <div className="nav"></div>
            <div className="container">
                <div className={`${skills.length > 0 ? "searchbar" : "hidden"}`}>
                    <div className="search">
                        <div className={"input"}>
                            {skills.map((skill) => {
                                return <span key={uuidv4()} className={"filtered-skills"}>{skill}
                                    <button
                                        className={"remove-button"}
                                        onClick={handleRemove}
                                        value={skill}
                                    >
                                        🞫
                                    </button>
                                    </span>
                            })}
                        </div>
                        <span className="clear"
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
