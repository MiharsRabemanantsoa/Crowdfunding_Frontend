import React , {useState  } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import ProjetService from '../Services/ProjetService';
import BannerModificationProjet from './BannerModificationProjet'
import logo_final from '../image/logo_final.png';
import logo_clair from '../image/logo_clair.png';
import Notification from '../Components/Notification'

 const ModifierDetails = props => {

    
    const [titre,setTitre] = useState('');
    const [descriptionCourte,setDescriptionCourte] = useState('');
    const [image,setImage] = useState("");
    const [image1,setImage1] = useState("");
    const [image2,setImage2] = useState("");
    const [image3,setImage3] = useState("");
    const [sousTitre1,setSousTitre1] = useState('');
    const [sousTitre2,setSousTitre2] = useState('');
    const [sousTitre3,setSousTitre3] = useState('');
    const [descriptionLongue1,setDescriptionLongue1] = useState('');
    const [descriptionLongue2,setDescriptionLongue2] = useState('');
    const [descriptionLongue3,setDescriptionLongue3] = useState('');
    const {id_projet} =  useParams();

    // const [imageURLs,setImageURls] = useState([]);

  

    const saveOrUpdateProjet = (e) => {
        e.preventDefault();
        
        const projet = {titre, descriptionCourte, image, image1, image2, image3,sousTitre1, sousTitre2, sousTitre3, descriptionLongue1, descriptionLongue2, descriptionLongue3 };

        if (id_projet) {
            projet.idProjet = id_projet;
            ProjetService.updateProjet(id_projet, projet).then((response) => {
                window.location.href = '/mesActivites';
                console.log("tonga ato ve n valeur update?")
            }).catch(error => {
                console.log(error)
            })

        } else {
            ProjetService.saveProjet(projet).then((response) => {
                console.log("mety ve?!!")
                console.log(response.data);
                
                window.location.href = '/mesActivites';
            }).catch(error => {
                console.log(error)
            })
        }

    };
    
    // useEffect(()=>{
    //     if(image.length <1) return;
    //     const newImageUrls= [];
    //     image.forEach(img =>  newImageUrls.push(URL.createObjectURL(img)));
    //     setImageURls(newImageUrls);
    // }, [image])

    // function onImageChange(e){
    //     setImage([...e.target.files]);
    // }
    const onChangePicture = e => {
        console.log('picture: ', image);
        setImage(URL.createObjectURL(e.target.files[0]));
        // setImage([...image, e.target.files[0]]);
      };

      const onChangePicture1 = e => {
        console.log('picture: ', image1);
        setImage1(URL.createObjectURL(e.target.files[0]));
        
      }; 
      const onChangePicture2 = e => {
        console.log('picture: ', image2);
        setImage2(URL.createObjectURL(e.target.files[0]));
        
      };  
      const onChangePicture3 = e => {
        console.log('picture: ', image3);
        setImage3(URL.createObjectURL(e.target.files[0]));
        
      };  


    useEffect(() => {

    

        ProjetService.getProjetByIdDetails(id_projet).then((response) => {
            console.log("ato ve ny valeur?")
            setTitre(response.data.titre);
            setDescriptionCourte(response.data.descriptionCourte);
            
            setImage(response.data.image);
            setImage1(response.data.image1);
            setImage2(response.data.image2);
            setImage3(response.data.image3);
            console.log(response.data.image);
            setSousTitre1(response.data.sousTitre1);
            setSousTitre2(response.data.sousTitre2);
            setSousTitre3(response.data.sousTitre3);
            setDescriptionLongue1(response.data.descriptionLongue1);
            setDescriptionLongue2(response.data.descriptionLongue2);
            setDescriptionLongue3(response.data.descriptionLongue3);


        }).catch(error => {
            console.log(error)
        })
    }, [id_projet]);

   

  return (
    <div>
      <div className="navbar-area sticky-top">

        <div className="mobile-nav">
            <a href="index.html" className="logo">
                <img src={logo_clair} alt="Logo"/>
            </a>
        </div>

        <div className="main-nav">
            <div className="container">
                <nav className="navbar navbar-expand-md navbar-light">
                    <a className="navbar-brand" href="index.html">
                        <img src={logo_final} className="logo-one" alt="Logo"/>
                    </a>
                    <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            
                            <li className="nav-item">
                                <a href="utilisateur.html" className="nav-link active">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a href="projet_utilisateur.html" className="nav-link">Tous les projets</a>
                            </li>
                            
                            <li className="nav-item">
                                <a href="a_propos.html" className="nav-link">A propos</a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">Contact</a>
                            </li>
                        </ul>
                        <div className="utilisateur">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown"  >

                                    <Notification />                               
                                </li>
                                <li className="nav-item">
                                    <a href="utilisateur.html" className="nav-link dropdown-toggle active">K. Anderson <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item">
                                            <a href="mon_Profil.html" className="nav-link">Mon profil</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="mes_activités.html" className="nav-link">Mon tableau de bord</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="mes_activités.html" className="nav-link">Mes activités</a>
                                        </li>
                                        <li className="nav-item">
                                            <a href="index.html" className="nav-link">Déconnecter</a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
      </div>
      <BannerModificationProjet/>
      <form >
      <div className="row">
              <div className="card"> 
                  <div className="container" data-aos="fade-right" data-aos-delay="100">
                  <div className="card text-center" id="card-titre">
                    <h2>Information de base</h2>
                    
                    </div>
                    <div className="row">
                      <div className="col-sm-6 col-lg-6">
                        <h5>Titre de votre projet</h5>
                        <p>Choisissez un titre clair, précis et pércutant afin que les investisseurs comprennent facilement l'importance de votre projet.</p>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6>Titre </h6>
                        <div className="divtitre">
                          <input name="titre" type="text" className="form-control" value={titre} 
                          onChange={(e) => setTitre(e.target.value)}
                          />
                        </div>          
                      </div>
                      <hr></hr>

                      <div className="col-sm-6 col-lg-6">
                        <h5>Description courte</h5>
                        <p>En quoi consiste votre projet ? Expliquez en quelques phrase l'objectif et l'avantage de votre projet.</p>
                      </div>
                      <div className="col-md-6 mb-4">
                        <h6>Description </h6>
                        <div className="divtitre">
                          <textarea name="descriptionCourte" type="text" className="form-control" id="titre" value={descriptionCourte}
                            onChange={(e) => setDescriptionCourte(e.target.value)}
                          />
                        </div>                        
                      </div>
                      <hr></hr>
            
                        <div className="col-sm-6 col-lg-6">
                          <h5>Image</h5>
                          <p>Entrez une image représentatif de votre projet. Choisissez une image qui illustre les valeurs de votre pour capter rapidement l'intérêt des ivestisseurs.</p>
                        </div>
                        <div className="col-md-6 mb-4">
                            <div className="card text-left">
                                <div className="card-body">
                                    <form className="dropzone" id="multiple-file-upload" action="#">
                                        <div className="fallback">
                                        
                                            <input name="file" type="file" id="file" multiple accept='img/*'  onChange={e => onChangePicture(e)}
                                             />
                                              <img src={image} alt={image} />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card text-center" id="card-titre">
                    <h2>Description longue du projet</h2>
                    <p className="text-center">Parlez-nous un peu plus de votre projet, de son histoire, de l'équipe qui le compose,
                                            etc. </p>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 mx-auto">
                            <div className="card">
                                <div className="card-body" data-aos="fade-right" data-aos-delay="100">   
                                    <div className="container" data-aos="fade-right" data-aos-delay="100">
                                        <div className="row">
                                            <div className="card">
                                            <div className="card-body">
                                                <h6>Sous-titre 1</h6>
                                                <div className="divtitre">
                                                    <input type="text" className="form-control" id="titre" value={sousTitre1}
                                                        onChange={(e) => setSousTitre1(e.target.value)}
                                                    />
                                                </div>                                        
                                                <h6>Image 1</h6>
                                                <div className="card text-center">
                                                    <div className="card-body">
                                                        <div className="dropzone" id="multiple-file-upload"
                                                                action="src/components/InformationDeBase#">
                                                            <div className="fallback">
                                                            
                                                                <input type="file" id="photo" name="photo"
                                                                     multiple accept='img/*'  onChange={e => onChangePicture1(e)}
                                                                />
                                                                <img src={image1} alt={image1} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h6>Description longue 1</h6>
                                                <div className="divtitre">
                                                    <textarea type="text" className="form-control" name="descriptionLongue1"  id="titre"
                                                            placeholder="Parlez-nous de votre projet." value={descriptionLongue1}
                                                            onChange={(e) => setDescriptionLongue1(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6>Sous-titre 2</h6>
                                                    <div className="divtitre">
                                                        <input type="text" className="form-control" id="titre" value={sousTitre2}
                                                            onChange={(e) => setSousTitre2(e.target.value)}
                                                        />
                                                    </div>
                                            
                                                    <h6>Image 2</h6>
                                                    <div className="card text-center">
                                                        <div className="card-body">
                                                            <div className="dropzone" id="multiple-file-upload"
                                                                    action="src/components/InformationDeBase#">
                                                                <div className="fallback">
                                                                
                                                                    <input type="file" 
                                                                         multiple accept='img/*'  onChange={e => onChangePicture2(e)}
                                                                    />
                                                                    <img src={image2} alt={image2}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <h6>Description longue 2</h6>
                                                    <div className="divtitre">
                                                        <textarea type="text" className="form-control"
                                                        placeholder="Parlez-nous de votre projet." value={descriptionLongue2}
                                                        onChange={(e) => setDescriptionLongue2(e.target.value)}
                                                        />
                                                    </div>
                                                </div>          
                                            </div>
                                            <div className="card">
                                                <div className="card-body">
                                                <h6>Sous-titre 3</h6>
                                                <div className="divtitre">
                                                    <input type="text" className="form-control" id="titre" value={sousTitre3}
                                                    onChange={(e) => setSousTitre3(e.target.value)}
                                                    />
                                                </div>
                                        
                                                <h6>Image 3</h6>
                                                <div className="card text-center">
                                                    <div className="card-body">
                                                        <div className="dropzone" id="multiple-file-upload"
                                                                action="src/components/InformationDeBase#">
                                                            <div className="fallback">
                                                                
                                                                <input type="file"  multiple accept='img/*'  onChange={e => onChangePicture3(e)}
                                                                    
                                                                />
                                                                <img src={image3} alt={image3} />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                           
                                                <h6>Description longue 3</h6>
                                                <div className="divtitre">
                                                    <textarea type="text" className="form-control"
                                                            placeholder="Parlez-nous de votre projet." value={descriptionLongue3}
                                                            onChange={(e) => setDescriptionLongue3(e.target.value)}
                                                            />
                                                </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>                 
                  <div>
                      <button type="submit" class="common-btn enrgis" onClick={(e) => saveOrUpdateProjet(e)}>Enregistrer</button>
                  </div>
              </div>

      </div>

      </form>
      
                    
    </div>
              
  )
}
export default ModifierDetails ;
