interface HeroProps {
    /**
     * Accept children components
     */

     children?: React.ReactNode;
}

export const Hero = ({children}: HeroProps) => (
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
             {children}
            </div>
        </div>
    </div>
)

export default Hero;
