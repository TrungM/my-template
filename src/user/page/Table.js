import React, { Fragment, useEffect } from "react";
import Layout from "./layout/Layout";
import "../css/tables.css";
import useActionListUI from "../../Hook/Ranking/useActionListUI";

const Table = () => {

    const { loading, listContent } = useActionListUI();
    useEffect(() => {
        document.title = "Tables";
    });
    return (
        <Layout>
            <div id="tables">
                <header className="header">
                    <div className="wrapper">
                        <h1 className="title">Tables</h1>
                    </div>
                </header>

                <div className="body">
                    <div className="body-wrapper">
                        <div className="logo">
                            <img src="/image/primierleague_2.png" alt="" />
                        </div>
                        <div className="table-ranking">
                            <table>
                                <thead>
                                    <tr>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull ">
                                                <span className="hidden md:block">Position</span>
                                                <span className="block md:hidden">P</span>
                                            </div>
                                        </th>
                                        <th className="league-table__pos-header w-80 text-left" scope="col">
                                            <div className="league-table__thFull">
                                                <span>Club</span>
                                            </div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull">
                                                <span className="hidden md:block">Played</span>
                                                <span className="block md:hidden">PL</span>
                                            </div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull">
                                                <span className="hidden md:block">Won</span>
                                                <span className="block md:hidden">W</span>
                                            </div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull">
                                                <span className="hidden md:block">Drawn</span>
                                                <span className="block md:hidden">D</span>
                                            </div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull">
                                                <span className="hidden md:block">Lost</span>
                                                <span className="block md:hidden">L</span>
                                            </div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull"><span>GF</span></div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull"> <span>GA</span> </div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull"> <span>GD</span> </div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull"> <span>Points</span> </div>
                                        </th>
                                        <th className="league-table__pos-header" scope="col">
                                            <div className="league-table__thFull"> <span>Form</span> </div>
                                        </th>
                                        <th className="league-table__pos-header text-left" scope="col">
                                            <div className="league-table__thFull"> <span>Next</span> </div>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {!loading && listContent.length > 0 && listContent.map((items, index) => (
                                            <tr key = {index}>
                                                <td className="league-table__pos pos button-tooltip" id="Tooltip">
                                                    <span className="league-table__value value">{items.position === 0 ? index + 1 : items.position}</span>
                                                    {/* <span class="league-table__movement none">  */}
                                                    {/* <span class="league-table__tooltip-container tooltipContainer tooltip-left" role="tooltip"> <span class="league-table__tooltip-content tooltip-content">Previous Position <span class="league-table__result-highlight">1 </span> </span> </span> </span> */}
                                                </td>
                                                <td className="flex gap-8 items-center w-80 h-[5.6rem]">
                                                    <div className="league-table-imageClubs">
                                                        <img src={items.clubName?.image} alt="" />
                                                    </div>
                                                    <div className="league-table-nameclubs">
                                                        <span >{items.clubName?.name}</span>
                                                    </div>
                                                </td>
                                                <td>{items.played ?? 0 }</td>
                                                <td>{items.won ?? 0}</td>
                                                <td>{items.draw ?? 0}</td>
                                                <td>{items.lose ?? 0}</td>
                                                <td>{items.gf ?? 0}</td>
                                                <td>{items.ga ?? 0}</td>
                                                <td>{items.gd ?? 0}</td>
                                                <td>{items.points ?? 0}</td>
                                                <td className="text-center w-52">
                                                    <ul className="flex items-center">
                                                        <li className="form-abbreviation">W</li>
                                                        <li className="form-abbreviation">W</li>
                                                        <li className="form-abbreviation">W</li>
                                                        <li className="form-abbreviation">W</li>
                                                        <li className="form-abbreviation">W</li>
                                                    </ul>
                                                </td>
                                                <td>
                                                    <div className="league-table-imageClubs">
                                                        <img src={items.nextmatch?.image} alt="" />
                                                    </div>
                                                </td>
                                            </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Table;
