import CardLayout from "./CardLayout"

const ExpertiseCard = ({ data }:{ data:any }) => {
    return (
        <CardLayout>
            <div className="h-full space-y-2 p-8 card_stylings">
                <div className=" text-Snow">{data.title}</div>
                <div className="text-sm text-LightGray font-normal">
                    {data.desc}
                </div>
            </div>
        </CardLayout>
    )
}

export default ExpertiseCard