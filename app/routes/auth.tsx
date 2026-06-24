import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router'
import bg from "~/../public/images/bg-Auth.svg";
import { usePuterStore } from "~/lib/puter"

export const meta = () => ([
    { title: 'Resuming Auth' },
    { name: 'description', content: 'Log into your account' },
])

const Auth = () => {

    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate()

    useEffect(()=> {
        if(auth.isAuthenticated) navigate(next)
    }, [auth.isAuthenticated , next])

    /**
 * AUTH PAGE LOGIC
 *
 * - On récupère le paramètre "next" dans l'URL (ex: ?next=/dashboard)
 *   pour savoir où rediriger l'utilisateur après la connexion.
 *
 * - On écoute l'état d'authentification via usePuterStore().
 *
 * - Dès que l'utilisateur est authentifié (auth.isAuthenticated === true),
 *   on le redirige automatiquement vers la route "next".
 *
 * - useEffect est utilisé pour déclencher la redirection
 *   dès que l'état de connexion change ou que "next" est mis à jour.
 */
   
    return (
        <main style={{ backgroundImage: `url(${bg})` }} className="bg-cover min-h-screen flex items-center justify-center">            <div className='grandient-border shadow-lg'>
            <section className='flex flex-col gap-8 bg-white rounded-2xl p-10'>
                <div className='flex flex-col items-center gap-2 text-centerz'>
                    <h1>Welcome</h1>
                    <h2>Log In to Continue Your Job Journey</h2>
                </div>
                <div>
                    {isLoading ? (
                        <button className='auth-button animate-pulse'>
                            <p>Signing you in ...</p>
                        </button>
                    ) : (
                        <>
                            {auth.isAuthenticated ? (
                                <button className='auth-button' onClick={auth.signOut}>
                                    <p> Log out</p>
                                </button>
                            ) : (
                                <button className='auth-button' onClick={auth.signIn}>
                                    <p> Log in</p>
                                </button>
                            )}
                        </>
                    )}
                </div>
            </section>
        </div>
        </main>
    )
}

export default Auth