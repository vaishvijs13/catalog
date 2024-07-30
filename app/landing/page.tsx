import UserInfo from "../components/UserInfo";

export default function landing() {
    return (
        <section>
            <h1 className="text-5xl font-bold text-gray-dark text-center mt-16 font-serif">Profile Details</h1>
            <div className="px-8 py-8">
                <UserInfo />
            </div>    
        </section>
        
    )
}