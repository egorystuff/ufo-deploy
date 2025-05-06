import React from 'react';
import './site-styles/coach-block.css'
import coach1 from './site-images/coach1.png'
import coach2 from './site-images/coach2.png'
import coach3 from './site-images/coach3.png'

const CoachBlock = () => {
    return (
        <div className='coach-block' id='features'>
            <div className="site-content">
                <div className="head-block">
                    <h2>Say hello to your very own
                        supportive smart coach, Alen™</h2>
                    <p>Finally, a coach who gets you and is always there. Alen keeps you
                        inspired and knows just when to step in with a boost. Alen’s advice is
                        backed by top scientists, and best of all, it actually works.</p>
                </div>
                <div className="coach-content-block">
                    <div className="gradient-block blue">
                        <div className="gradient-block-text">
                            <p className="title">Keep making progress</p>
                            <p className="subtitle">24/7 chat</p>
                            <span>Chat with Alen about recipes, workout routines, stress relief, and more. Whatever wellness needs you have, Alen is always ready with quick answers and practical ideas to
help move you forward.</span>
                        </div>
                        <div className="img">
                            <img src={coach1} alt="coach-image"/>
                        </div>
                    </div>
                    <div className="block-info">
                        <p className="title"><span>AI coach ready to help </span><br/> 24/7 chat</p>
                        <p className="description">
                            <span>Chat</span> with Alen about recipes, workout routines, stress
                            relief, and more. Whatever wellness needs you have, Alen
                            is always ready with quick answers and practical ideas to
                            help move you forward.
                        </p>
                    </div>
                </div>
                <div className="coach-content-block">
                    <div className="gradient-block green">
                        <div className="gradient-block-text">
                            <p className="title">Follow the daily plan</p>
                            <p className="subtitle">24/7 chat</p>
                            <span>Chat with Alen about recipes, workout routines, stress relief, and more. Whatever wellness needs you have, Alen is always ready with quick answers and practical ideas to
help move you forward.</span>
                        </div>
                        <div className="img">
                            <img src={coach2} alt="coach-image"/>
                        </div>
                    </div>
                    <div className="block-info">
                        <p className="title"><span>Keep making progress </span><br/> 24/7 chat</p>
                        <p className="description">
                            <span>Chat</span> with Alen about recipes, workout routines, stress
                            relief, and more. Whatever wellness needs you have, Alen
                            is always ready with quick answers and practical ideas to
                            help move you forward.
                        </p>
                    </div>
                </div>
                <div className="coach-content-block">
                    <div className="gradient-block orange">
                        <div className="gradient-block-text">
                            <p className="title">Follow the daily plan</p>
                            <p className="subtitle">24/7 chat</p>
                            <span>Chat with Alen about recipes, workout routines, stress relief, and more. Whatever wellness needs you have, Alen is always ready with quick answers and practical ideas to
help move you forward.</span>
                        </div>
                        <div className="img">
                            <img src={coach2} alt="coach-image"/>
                        </div>
                    </div>
                    <div className="block-info">
                        <p className="title"><span>Keep making progress </span><br/> 24/7 chat</p>
                        <p className="description">
                            <span>Chat</span> with Alen about recipes, workout routines, stress
                            relief, and more. Whatever wellness needs you have, Alen
                            is always ready with quick answers and practical ideas to
                            help move you forward.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoachBlock;