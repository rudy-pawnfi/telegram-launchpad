import { useLocation, useNavigate } from 'react-router-dom'
import iconPrairieDog from '/images/prairie/icon-PrairieDog.png'
import './index.scss'
import { useEffect, useMemo } from 'react'
const TabBox = (props) => {

    const navigate = useNavigate()
    const location = useLocation()
    console.log('location :>> ', location);
    // const {list} = props
    const list =[
        {
            label: 'Home',
            icon: 'p-icon-Home',
            link: '/telegram-test',
            link2: '/telegram-test/'
        },
        {
            label: 'Farming',
            icon: 'p-icon-Farming',
            link: '/telegram-test/farming'
        },
        {
            label: 'Prairie',
            icon: '',
            img: iconPrairieDog,
            link: '/telegram-test/prairie'
        },
        {
            label: 'Tasks',
            icon: 'p-icon-Tasks',
            link: '/telegram-test/tasks'
        },
        {
            label: 'Friends',
            icon: 'p-icon-InviteFriends',
            link: '/telegram-test/friends'
        }
    ]
    const toPage = (val) => {
        navigate(val.link)
    }
    const active = (val) => {
        if(location.pathname === val.link || location.pathname === val?.link2) return 'text_2'
        return 'text_4'
    }

    const displayNone = useMemo(() => {
        if(location.pathname === '/telegram-test/game'){
            return false
        }
        return true
    },[])
    return(
        <>
            {
                displayNone &&  <div className="tab_box w100 pb_6 pt_4">
                {
                    list.map(val =>
                        <div className={`flex column align_center ${active(val)}`} key={val.label} onClick={() => toPage(val)}>
                            
                            
                            <div className="tab_icon_box">
                                {
                                    val.img ?
                                    <img src={val.img} alt="" srcSet="" className="" />
                                    :
                                    <i className={`picon is_4 ${val.icon}`} />
                                }
                            </div>
                            <span className="fw_m">{val.label}</span>
                        </div>    
                    )
                }
            </div>
            }
        </>
    )
}
export default TabBox