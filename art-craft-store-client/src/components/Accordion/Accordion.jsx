import React from 'react';

const Accordion = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        What are Paper Crafts?
                    </div>
                    <div className="collapse-content">
                        <p>Paper crafts are projects that involve cutting, folding, and decorating paper to create various items such as origami, paper flowers, and paper art.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What is Glass Art?
                    </div>
                    <div className="collapse-content">
                        <p>Glass art refers to the process of creating decorative or functional items from glass. This can include glass jewelry, glass sculptures, and glass artwork.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        How can I start making Paper Crafts?
                    </div>
                    <div className="collapse-content">
                        <p>Start by choosing a simple project to begin with, such as a paper flower or a basic origami pattern. You can find tutorials online or in craft books.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-4">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        What tools do I need for Glass Art?
                    </div>
                    <div className="collapse-content">
                        <p>For glass art, you'll need a few basic tools such as a glass cutting saw, a glass blowing torch, and safety goggles. It's also helpful to have a workspace with a heat source.</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Accordion;