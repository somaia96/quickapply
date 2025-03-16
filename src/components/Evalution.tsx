import { Button } from "./ui/button"

const Evalution = () => {
    return (
        <div className="py-10 bg-background">
            <div className="container text-secondary">
                <h2 className="text-5xl text-center mb-10"><span className="text-primary">Re</span>sume <span className="text-primary">Ev</span>aluation</h2>
                <div className="flex">
                    <div className="flex-1">
                        <p className="font-semibold">We evaluate your resume based on the data we have that resembles your resume and according to the requirements of companies.</p>
                        <div className="flex relative space-x-5 items-center my-20">
                            <span>Resume Evaluation</span>
                            <div className="w-72 h-5 bg-gray-300 rounded-full overflow-hidden">
                                <div className="w-4/5 h-full bg-primary" >

                                </div>
                            </div>
                            <span className="absolute right-24 text-primary font-semibold -top-full">85%</span>
                        </div>
                    </div>
                    <div className="flex-1">
                        <h3 className="font-semibold mb-8">Tips for Improving Your Resume</h3>
                        <p className="border-l-2 border-l-primary px-10 m-0 leading-10 text-xl">
                            تحسين المهارات الخاصة بك من خلال الدورات التدريبية.
                            <br />
                            إضافة مهارات جديدة تتعلق بالصناعة التي ترغب في العمل بها.
                            <br />
                            تحديث المعلومات الشخصية بشكل دوري.
                            <br />
                            التأكد من تنسيق السيرة الذاتية بشكل جذاب.
                            <br />
                            استخدام كلمات مفتاحية تتعلق بالوظيفة المستهدفة.
                            <br />
                            طلب مراجعة السيرة الذاتية من شخص ذو خبرة.
                        </p>
                        <Button className="bg-primary rounded-full flex my-6 mr-20 ml-auto px-10 shadow-md" size={"sm"}>next</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Evalution
