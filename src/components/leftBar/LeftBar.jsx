import classes from './styles.module.scss'
import Friends from '@assets/1.png'
import Groups from '@assets/2.png'
import Market  from '@assets/3.png'
import Watch  from '@assets/4.png'
import Memories  from '@assets/5.png'
import Events  from '@assets/6.png'
import Gaming  from '@assets/7.png'
import Gallery  from '@assets/8.png'
import Videos  from '@assets/9.png'
import Messages  from '@assets/10.png'
import Tutorials  from '@assets/11.png'
import Courses  from '@assets/12.png'
import Fund  from '@assets/13.png'




export default function (){
    return(
        <div className={classes.leftBar}>

            <div className={classes.container}>
                <div className={classes.menu}>
                    <div className={classes.user}>
                        <img src='https://cs7.pikabu.ru/post_img/big/2014/07/22/6/1406017582_1886645288.jpg' alt='https://nevateka.ru/upload/iblock/bfd/mcibvfdrfow139gharqpg3nlcgqdk8bn/0aa07cc1-2eab-47f2-8a5c-e147fa415dfd.png'/>
                        <span>John Doe</span>
                    </div>
                    <div className={classes.item}>
                        <img src={Friends} alt=''/>
                        <span>Friends</span>
                    </div>
                    <div className={classes.item}>
                        <img src={Groups} alt=''/>
                        <span>Groups</span>
                    </div>
                    <div className={classes.item}>
                        <img src={Market} alt=''/>
                        <span>Marketplace</span>
                    </div>
                    <div className={classes.item}>
                        <img src={Watch} alt=''/>
                        <span>Watch</span>
                    </div>
                    <div className={classes.item}>
                        <img src={Memories} alt=''/>
                        <span>Memories</span>
                    </div>
                    <hr/>
                    <div className={classes.menu}>
                        <span>Your shortcuts</span>
                        <div className={classes.item}>
                            <img src={Events} alt=''/>
                            <span>Events</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Gaming} alt=''/>
                            <span>Gaming</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Gallery} alt=''/>
                            <span>Gallery</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Videos} alt=''/>
                            <span>Videos</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Messages} alt=''/>
                            <span>Messages</span>
                        </div>
                    </div>
                    <hr/>
                    <div className={classes.menu}>
                        <span>Others</span>
                        <div className={classes.item}>
                            <img src={Tutorials} alt=''/>
                            <span>Tutorials</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Courses} alt=''/>
                            <span>Courses</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Fund} alt=''/>
                            <span>Fund</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Fund} alt=''/>
                            <span>Fund</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Fund} alt=''/>
                            <span>Fund</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Fund} alt=''/>
                            <span>Fund</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Fund} alt=''/>
                            <span>Fund</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Fund} alt=''/>
                            <span>Fund</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Fund} alt=''/>
                            <span>Fund</span>
                        </div>
                        <div className={classes.item}>
                            <img src={Fund} alt=''/>
                            <span>Fund</span>
                        </div>  
                    </div>
                        
                </div>
            </div>
        </div>

    )
}