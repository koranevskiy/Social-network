import React, {memo} from 'react';
import classes from "./ProfileInfo.module.css";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = memo((props) => {
    return (
        <div className={classes.content}>
            <img
                src="https://images.pexels.com/photos/5232649/pexels-photo-5232649.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.54&h=500&sharp=20&w=1400"
                alt="main img"/>

            <div className={classes['user-info']}>

                <div className={classes['user-row']}>

                    <div className={`${classes['user-item']} ${classes['user-item-avatar']}`}>

                        <img
                            src={props.profile.photos.small ? props.profile.photos.small : "https://i.pinimg.com/originals/ba/66/02/ba6602a51ea3490764cb1e03ea28fae8.jpg"
                            }
                            alt="avatar"/>

                    </div>
                    <div className={`${classes['user-item']} ${classes['user-item-description']}`}>

                        <div className={classes['user-text']}>

                            <div className={classes['user-name']}>
                                <div className={classes.fullName}>{props.profile.fullName}</div>
                                <div className={classes.status}>
                                    <ProfileStatus/>
                                </div>
                            </div>


                            <ul className={classes['user-data']}>
                                <li className={classes['user-data-item']}>About me: {props.profile.aboutMe}</li>
                                <li className={classes['user-data-item']}>Looking for a
                                    job: {props.profile.lookingForAJob ? 'Yes' : 'No'}</li>
                                <li className={classes['user-data-item']}>Job
                                    descriptoin: {props.profile.lookingForAJobDescription}</li>
                                <li className={classes['user-data-item']}>Contacts: {props.profile.contacts.facebook ? props.profile.contacts.facebook : 'No'}</li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default ProfileInfo;