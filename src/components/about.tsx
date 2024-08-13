import { motion } from 'framer-motion';

export default function About() {
    return (
        <div className="min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
            <motion.div 
                className="w-full md:w-1/2 flex flex-col justify-center mb-8 md:mb-0"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="mx-auto w-full md:w-3/4 lg:w-2/3">
                    <motion.p 
                        className="text-base md:text-lg text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        Welcome to my corner of the web where creativity meets technology.
                    </motion.p>
                    <motion.p 
                        className="text-center py-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                    >
                        I'm <span className="italic text-2xl md:text-4xl">Abitha Baby</span>
                    </motion.p>
                    <motion.p 
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.1, duration: 0.8 }}
                    >
                        a passionate 
                    </motion.p>
                    <motion.p 
                        className="py-2 font-bold text-center text-xl md:text-2xl"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4, duration: 0.8 }}
                    >
                        Web Developer,
                    </motion.p>
                    <motion.p 
                        className="text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.7, duration: 0.8 }}
                    >
                        dedicated to crafting innovative solutions and turning ideas into reality.
                    </motion.p>
                </div>
            </motion.div>
            <motion.div 
                className="w-full md:w-1/2 flex justify-center"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
            >
                <motion.img 
                    src="src\assets\profile.jpg" 
                    alt="Profile image" 
                    className="w-64 h-64 md:w-80 md:h-80 lg:w-[500px] lg:h-[500px] rounded-full object-cover"
                    initial={{ scale: 0.8 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                />
            </motion.div>
        </div>
    );
}