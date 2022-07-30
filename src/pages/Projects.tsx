
import Menu from './../components/test/Menu/Menu';
import Header from './../components/test/Header/index';
import { MdChevronLeft } from 'react-icons/md'
import Filter from '../components/test/Filter';
import Content from './../components/test/Content/index';

function Projects() {
    return ( 
        <main className="main-container">
            <div>
                <Menu />
            </div>
            <div className="main-content">

                <Header />
                    <button className='back_btn'> <MdChevronLeft className='back__icon' /> Вернуться на главную </button>
                <Filter />
                <Content />
            </div>
        </main>
     );
}

export default Projects;