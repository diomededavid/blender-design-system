import React from "react";

interface AlertProps {
    /**
     * Alert color options
     */
    color: "alert-info" | "alert-success" | "alert-warning" | "alert-error";

    /**
     * Alert title
     */
    title: string;

    /**
     * Alert description
     */
    description: string;
}

/**
 * Primary UI component for user interaction
 */
export const Alert = ({color, title, description, ...props}: AlertProps) => {
    return (
        <div className={`alert ${color} shadow-lg`}>
            <div>
                {(() => {
                    switch (color) {
                        case 'alert-info':
                            return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        className="stroke-current flex-shrink-0 w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                        case 'alert-success':
                            return <svg xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                        viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        case 'alert-warning':
                            return <svg xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                        viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                            </svg>

                        case 'alert-error':
                            return <svg xmlns="http://www.w3.org/2000/svg"
                                        className="stroke-current flex-shrink-0 h-6 w-6" fill="none"
                                        viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                        default:
                            return null
                    }
                })()}
                <div>
                    <h3 className="font-bold">{title}</h3>
                    {description && (<div className="text-xs">{description}</div>) }
                </div>
            </div>
        </div>
    );
};
