import { useState, type FormEvent } from 'react'
import Navbar from "~/components/NavBar"
import bg from "~/../public/images/bg-main.svg";
import FileUploader from '~/components/FileUploader';

const Upload = () => {

    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {

    }
    return (
        <main style={{ backgroundImage: `url(${bg})` }} className="bg-cover]">
            <Navbar />

            <section className="main-section">
                <div className='page-heading py-16'>
                    <h1>Smart feedback for your dream job</h1>
                    {isProcessing ? (
                        <>
                            <h2>{statusText}</h2>
                            <img src='/images/resume-scan.gif' className='w-full' />
                        </>
                    ) : (
                        <h2>Drop your resume for an ATS score and improvement tips</h2>
                    )}
                    {!isProcessing && (
                        <form id='upload-form' onSubmit={handleSubmit} className='flex flex-col gap4 mt-8'>
                            <div className='form-div'>
                                <label htmlFor='company-name'>Company name</label>
                                <input type='text' name='campany-name' placeholder='Company name' id='campany-name'></input>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='jobs-title'>Jobs title</label>
                                <input type='text' name='jobs-title' placeholder='Jobs title' id='jobs-title'></input>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='jobs-description'>Jobs description</label>
                                <textarea rows={5}  name='jobs-description' placeholder='Jobs description' id='jobs-description'></textarea>
                            </div>
                            <div className='form-div'>
                                <label htmlFor='uploader'>Upload resume</label>
                                <FileUploader/>
                            </div>
                            <button className='primary-button' type='submit'>
                                Analyse resume
                            </button>
                        </form>
                    )}
                </div>
            </section>
        </main>
    )
}

export default Upload