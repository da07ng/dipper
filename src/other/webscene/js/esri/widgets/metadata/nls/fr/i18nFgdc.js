define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "æ_FGDC__Â",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "æ_None__Â",
    	notComplete: "æ_Not complete_____Â",
    	other: "æ_Other___Â",
    	present: "æ_Present___Â",
    	unknown: "æ_Unknown___Â",
    	unpublishedMaterial: "æ_Unpublished material_______Â"
    },
    
    hints: {
    	integerGreaterThanOne: "æ_(enter an integer > 1)________Â",
    	integer0To100: "æ_(enter an integer 0..100)_________Â"
    },
    
    citeinfo: {
    	caption: "æ_Citation Information_______Â",
    	origin: "æ_Originator____Â",
    	pubdate: "æ_Publication Date______Â",
    	pubtime: "æ_Publication Time______Â",
    	title: "æ_Title___Â",
    	edition: "æ_Edition___Â",
    	geoform: {
    		caption: "æ_Geospatial Data Presentation Form___________Â",
    		atlas: "æ_Atlas___Â",
    		audio: "æ_Audio___Â",
    		diagram: "æ_Diagram___Â",
    		sDocument: "æ_Document___Â",
    		globe: "æ_Globe___Â",
    		map: "æ_Map__Â",
    		model: "æ_Model___Â",
    		multiMediaPresentation: "æ_Multimedia presentation________Â",
    		profile: "æ_Profile___Â",
    		rasterDigitalData: "æ_Raster digital data_______Â",
    		remoteSensingImage: "æ_Remote-sensing image_______Â",
    		section: "æ_Section___Â",
    		spreadsheet: "æ_Spreadsheet____Â",
    		tabularDigitalData: "æ_Tabular digital data_______Â",
    		vectorDigitalData: "æ_Vector digital data_______Â",
    		video: "æ_Video___Â",
    		view: "æ_View__Â"
    	},
    	serinfo: {
    		caption: "æ_Series Information______Â",
    		sername: "æ_Series Name____Â",
    		issue: "æ_Issue Identification_______Â"
    	},
    	pubinfo: {
    		caption: "æ_Publication Information________Â",
    		pubplace: "æ_Publication Place______Â",
    		publish: "æ_Publisher____Â"
    	},
    	othercit: "æ_Other Citation Details________Â",
    	onlink: "æ_Online Linkage (URL)_______Â"
    },
    
    cntinfo: {
    	caption: "æ_Contact Information_______Â",
    	section: {
    		primary: "æ_Primary___Â",
    		phoneAndEmail: "æ_Phone and E-Mail______Â",
    		hoursAndInstructions: "æ_Hours and Instructions________Â"
    	},
    	cntorgp: {
    		caption: "æ_By organization______Â",
    		cntorg: "æ_Organization_____Â",
    		cntper: "æ_Person___Â"
    	},
    	cntperp: {
    		caption: "æ_By person____Â",
    		cntper: "æ_Person___Â",
    		cntorg: "æ_Organization_____Â"
    	},
    	cntpos: "æ_Position___Â",
    	cntaddr: {
    		caption: "æ_Address___Â",
    		addrtype: {
    			caption: "æ_Address Type_____Â",
    			mailing: "æ_Mailing___Â",
    			physical: "æ_Physical___Â",
    			mailingAndPhysical: "æ_Mailing and Physical_______Â"
    		},
    		address: "æ_Address___Â",
    		city: "æ_City__Â",
    		state: "æ_State___Â",
    		postal: "æ_Postal Code____Â",
    		country: "æ_Country___Â"
    	},
    	cntvoice: "æ_Voice___Â",
    	cnttdd: "æ_TDD/TTY Telephone (hearing impaired)____________Â",
    	cntfax: "æ_Fax__Â",
    	cntemail: "æ_E-Mail Address_____Â",
    	hours: "æ_Hours___Â",
    	cntinst: "æ_Instructions_____Â"
    },
    
    dataqual: {
    	caption: "æ_Data Quality Information________Â",
    	section: {
    		attributeAccuracy: "æ_Attribute Accuracy______Â",
    		logicalConsistency: "æ_Logical Consistency_______Â",
    		completeness: "æ_Completeness_____Â",
    		positionalAccuracy: "æ_Positional Accuracy_______Â",
    		lineage: "æ_Lineage___Â",
    		cloudCover: "æ_Cloud Cover____Â"
    	},
    	attracc: {
    		caption: "æ_Attribute Accuracy______Â",
    		attraccr: "æ_Attribute Accuracy Report_________Â",
    		qattracc: {
    			caption: "æ_Quantitative Attribute Accuracy Assessment______________Â",
    			attraccv: "æ_Attribute Accuracy Value________Â",
    			attracce: "æ_Attribute Accuracy Explanation__________Â"
    		}
    	},
    	logic: "æ_Logical Consistency Report_________Â",
    	complete: "æ_Completeness Report_______Â",
    	posacc: "æ_Positional Accuracy_______Â",
    	horizpa: {
    		caption: "æ_Horizontal Positional Accuracy__________Â",
    		horizpar: "æ_Horizontal Positional Accuracy Report____________Â",
    		qhorizpa: {
    			caption: "æ_Quantitative Horizontal Positional Accuracy Assessment_________________Â",
    			horizpav: "æ_Horizontal Positional Accuracy Value____________Â",
    			horizpae: "æ_Horizontal Positional Accuracy Explanation______________Â"
    		}
    	},
    	vertacc: {
    		caption: "æ_Vertical Positional Accuracy_________Â",
    		vertaccr: "æ_Vertical Positional Accuracy Report____________Â",
    		qvertpa: {
    			caption: "æ_Quantitative Vertical Positional Accuracy Assessment_________________Â",
    			vertaccv: "æ_Vertical Positional Accuracy Value___________Â",
    			vertacce: "æ_Vertical Positional Accuracy Explanation_____________Â"
    		}
    	},
    	lineage: {
    		caption: "æ_Lineage___Â"
    	},
    	srcinfo: {
    		caption: "æ_Source Information______Â",
    		srccite: "æ_Source Citation______Â",
    		srcscale: "æ_Source Scale Denominator________Â",
    		typesrc: {
    			caption: "æ_Type of Source Media_______Â",
    			paper: "æ_Paper___Â",
    			stableBaseMaterial: "æ_Stable-base material_______Â",
    			microfiche: "æ_Microfiche____Â",
    			microfilm: "æ_Microfilm____Â",
    			audiocassette: "æ_Audio cassette_____Â",
    			chart: "æ_Chart___Â",
    			filmstrip: "æ_Film strip____Â",
    			transparency: "æ_Transparency_____Â",
    			videocassette: "æ_Video cassette_____Â",
    			videodisc: "æ_Video disc____Â",
    			videotape: "æ_Video tape____Â",
    			physicalModel: "æ_Physical model_____Â",
    			computerProgram: "æ_Computer program______Â",
    			disc: "æ_Disc__Â",
    			cartridgeTape: "æ_Cartridge tape_____Â",
    			magneticTape: "æ_Magnetic tape_____Â",
    			online: "æ_Online___Â",
    			cdrom: "æ_CD-ROM___Â",
    			electronicBulletinBoard: "æ_Electronic bulletin board_________Â",
    			electronicMailSystem: "æ_Electronic mail system________Â"
    		},
    		srctime: "æ_Source Time Period of Content__________Â",
    		srccurr: "æ_Source Currentness Reference_________Â",
    		srccitea: "æ_Source Citation Abbreviation_________Â",
    		srccontr: "æ_Source Contribution_______Â"
    	},
    	procstep: {
    		caption: "æ_Process Step_____Â",
    		procdesc: "æ_Process Description_______Â",
    		srcused: "æ_Source Used Citation Abbreviation___________Â",
    		procdate: "æ_Process Date_____Â",
    		proctime: "æ_Process Time_____Â",
    		srcprod: "æ_Source Produced Citation Abbreviation____________Â",
    		proccont: "æ_Process Contact______Â"
    	},
    	cloud: "æ_Cloud Cover____Â"
    },
    
    distinfo: {
    	caption: "æ_Distribution Information________Â",
    	section: {
    		distributor: "æ_Distributor____Â",
    		description: "æ_Description____Â",
    		orderProcess: "æ_Order Process_____Â",
    		prerequisites: "æ_Prerequisites_____Â",
    		availability: "æ_Availability_____Â"
    	},
    	distrib: "æ_Distributor____Â",
    	resdesc: {
    		caption: "æ_Resource Description_______Â",
    		liveData: "æ_Live Data and Maps______Â",
    		downloadableData: "æ_Downloadable Data______Â",
    		offlineData: "æ_Offline Data_____Â",
    		staticMapImages: "æ_Static Map Images______Â",
    		sDocument: "æ_Other Documents______Â",
    		application: "æ_Applications_____Â",
    		geographicService: "æ_Geographic Services_______Â",
    		clearingHouse: "æ_Clearinghouses_____Â",
    		mapFiles: "æ_Map Files____Â",
    		geographicActivies: "æ_Geographic Activities_______Â"
    	},
    	distliab: "æ_Distribution Liability Statement___________Â",
    	custom: "æ_Custom Order Process_______Â",
    	techpreq: "æ_Technical Prerequisites________Â",
    	availabl: "æ_Availability_____Â"
    },
    
    eainfo: {
    	caption: "æ_Entity and Attribute Information___________Â",
    	overview: "æ_Overview Description_______Â",
    	eaover: "æ_Entity and Attribute Overview__________Â",
    	eadetcit: "æ_Entity and Attribute Detail Citation____________Â"
    },
    
    idinfo: {
    	caption: "æ_Identification Information_________Â",
    	section: {
    		timeAndStatus: "æ_Time and Status______Â",
    		constraints: "æ_Constraints____Â",
    		contact: "æ_Contact___Â",
    		additional: "æ_Additional____Â"
    	},
    	citeinfo: "æ_Citation___Â",
    	descript: {
    		caption: "æ_Description____Â",
    		sAbstract: "æ_Abstract___Â",
    		purpose: "æ_Purpose___Â",
    		supplinf: "æ_Supplemental Information________Â"
    	},
    	timeperd: {
    		caption: "æ_Time Period of Content________Â",
    		current: {
    			caption: "æ_Currentness Reference_______Â",
    			groundCondition: "æ_Ground Condition______Â",
    			publicationDate: "æ_Publication Date______Â"
    		}
    	},
    	status: {
    		caption: "æ_Status___Â",
    		progress: {
    			caption: "æ_Progress___Â",
     			complete: "æ_Complete___Â",
    			inWork: "æ_In work___Â",
    			planned: "æ_Planned___Â"
    		},
    		update: {
    			caption: "æ_Maintenance and Update Frequency___________Â",
    			continual: "æ_Continual____Â",
    			daily: "æ_Daily___Â",
    			weekly: "æ_Weekly___Â",
    			monthly: "æ_Monthly___Â",
    			annually: "æ_Annually___Â",
    			unknown: "æ_Unknown___Â",
    			asNeeded: "æ_As needed____Â",
    			irregular: "æ_Irregular____Â",
    			nonePlanned: "æ_None planned_____Â"
    		}
    	},
    	spdom: {
    		caption: "æ_Extent___Â",
    		bounding: {
    			caption: "æ_Bounding Coordinates_______Â",
    			westbc: "æ_West Bounding Longitude________Â",
    			eastbc: "æ_East Bounding Longitude________Â",
    			northbc: "æ_North Bounding Latitude________Â",
    			southbc: "æ_South Bounding Latitude________Â"
    		}
    	},
      keywords: {
        caption: "Mot-clé",
        theme: "Thème",
        place: "Emplacement géographique",
        stratum: "Niveau",
        temporal: "Temporel",
        thesaursus: "Dictionnaire des synonymes associé",
        delimited: "Mot-clé",
        themektIsoTopicCategory: "Rubrique ISO...",
        themektIsoTopicDialog: "Rubrique ISO",
        placektGnis: "Système d\'information des noms géographiques"
      },
      accconst: "Contraintes d\'accès",
      useconst: "Contraintes d\'utilisation",
      ptcontac: "Point de contact de la ressource",
      browse: {
      	caption: "æ_Browse Graphic_____Â",
      	browsen: "æ_Browse Graphic URL______Â",
      	browsed: "æ_Browse Graphic File Description__________Â",
      	browset: "æ_Browse Graphic File Type________Â"
      },
      datacred: "Crédit de jeu de données",
      secinfo: {
      	caption: "æ_Security Information_______Â",
      	secsys: "æ_Security Classification System__________Â",
      	secclass: {
      		caption: "æ_Security Classification________Â",
      		topSecret: "æ_Top secret____Â",
      		secret: "æ_Secret___Â",
      		confidential: "æ_Confidential_____Â",
      		restricted: "æ_Restricted____Â",
      		unclassified: "æ_Unclassified_____Â",
      		sensitive: "æ_Sensitive____Â"
      	},
      	sechandl: "æ_Security Handling Description__________Â"
      },
      sNative: "Environnement de jeu de données natif",
      crossref: "Référence croisée"
    },
    
    metadata: {
    	idinfo: "æ_Identification_____Â",
    	dataqual: "æ_Quality___Â",
    	spdoinfo: "æ_Spatial Data Organization_________Â",
    	spref: "æ_Spatial Reference______Â",
    	eainfo: "æ_Entity and Attribute_______Â",
    	distinfo: "æ_Distribution_____Â",
    	metainfo: "æ_Metadata___Â"
    },
    
    metainfo: {
    	caption: "æ_Metadata Information_______Â",
    	section: {
    		dates: "æ_Metadata Dates_____Â",
    		contact: "æ_Metadata Contact______Â",
    		standard: "æ_Metadata Standard______Â",
    		additional: "æ_Additional____Â"
    	},
      metd: "Date des métadonnées",
      metrd: "Date d\'examen des métadonnées",
      metfrd: "Date future d\'examen des métadonnées",
      metstdn: "Nom standard des métadonnées",
      metstdv: "Version standard des métadonnées",
      metac: "Contraintes d\'accès aux métadonnées",
      metuc: "Contraintes d\'utilisation des métadonnées",
      metsi: {
      	caption: "æ_Metadata Security Information__________Â",
      	metscs: "æ_Metadata Security Classification System_____________Â",
      	metsc: "æ_Metadata Security Classification___________Â",
      	metshd: "æ_Metadata Security Handling Description____________Â"
      }
    },
    
    spref: {
    	caption: "æ_Spatial Reference Information__________Â",
    	horizsys: {
    		caption: "æ_Horizontal Coordinate System_________Â",
    		geograph: {
    			caption: "æ_Geographic____Â",
    			latres: "æ_Latitude Resolution_______Â",
    			longres: "æ_Longitude Resolution_______Â",
    			geogunit: {
    				caption: "æ_Geographic Coordinate Units_________Â",
    				decimalDegrees: "æ_Decimal degrees______Â",
    				decimalMinutes: "æ_Decimal minutes______Â",
    				decimalSeconds: "æ_Decimal seconds______Â",
    				degreesAndDecimalMinutes: "æ_Degrees and decimal minutes_________Â",
    				degreesMinutesAndDecimalSeconds: "æ_Degrees, minutes, and decimal seconds____________Â",
    				radians: "æ_Radians___Â",
    				grads: "æ_Grads___Â"
    			}
    		},
    		planar: {
    			caption: "æ_Planar___Â"
    		},
    		local: {
    			caption: "æ_Local___Â",
    			localdes: "æ_Local Description______Â",
    			localgeo: "æ_Local Georeference Information__________Â"
    		},
    		geodetic: {
    			caption: "æ_Geodetic Model_____Â",
    			horizdn: {
    				caption: "æ_Horizontal Datum Name_______Â",
    				nad83: "æ_North American Datum of 1983_________Â",
    				nad27: "æ_North American Datum of 1927_________Â"
    			},
    			ellips: {
    				caption: "æ_Ellipsoid Name_____Â",
    				grs80: "æ_Geodetic Reference System 80_________Â",
    				clarke1866: "æ_Clarke 1866____Â"
    			},
    			semiaxis: "æ_Semi-major Axis______Â",
    			denflat: "æ_Denominator of Flattening Ratio__________Â"
    		}
    	},
    	vertdef: {
    		caption: "æ_Vertical Coordinate System_________Â",
    		altsys: {
    			caption: "æ_Altitude System______Â",
    			altdatum: {
    				caption: "æ_Altitude Datum Name_______Â",
    				navd88: "æ_North American Vertical Datum of 1988____________Â",
    				ngvd29: "æ_National Geodetic Vertical Datum of 1929_____________Â"
    			},
    			altres: "æ_Altitude Resolution_______Â",
    			altunits: {
    				caption: "æ_Altitude Distance Units________Â",
    				meters: "æ_Meters___Â",
    				feet: "æ_Feet__Â"
    			},
    			altenc: {
    				caption: "æ_Altitude Encoding Method________Â",
    				explicit: "æ_Explicit elevation coordinate included with horizontal coordinates_____________________Â",
    				implicit: "æ_Implicit coordinate_______Â",
    				attribute: "æ_Attribute values______Â"
    			}
    		},
    		depthsys: {
    			caption: "æ_Depth System_____Â",
    			depthdn: {
    				caption: "æ_Depth Datum Name______Â",
    				option1: "æ_Local surface_____Â", 
    				option2: "æ_Chart datum; datum for sounding reduction_____________Â", 
    				option3: "æ_Lowest astronomical tide________Â", 
    				option4: "æ_Highest astronomical tide_________Â", 
    				option5: "æ_Mean low water_____Â", 
    				option6: "æ_Mean high water______Â", 
    				option7: "æ_Mean sea level_____Â", 
    				option8: "æ_Land survey datum______Â", 
    				option9: "æ_Mean low water springs________Â", 
    				option10: "æ_Mean high water springs________Â", 
    				option11: "æ_Mean low water neap_______Â", 
    				option12: "æ_Mean high water neap_______Â", 
    				option13: "æ_Mean lower low water_______Â", 
    				option14: "æ_Mean lower low water springs_________Â", 
    				option15: "æ_Mean higher high water________Â", 
    				option16: "æ_Mean higher low water_______Â", 
    				option17: "æ_Mean lower high water_______Â", 
    				option18: "æ_Spring tide____Â", 
    				option19: "æ_Tropic lower low water________Â", 
    				option20: "æ_Neap tide____Â", 
    				option21: "æ_High water____Â", 
    				option22: "æ_Higher high water______Â", 
    				option23: "æ_Low water____Â", 
    				option24: "æ_Low-water datum______Â", 
    				option25: "æ_Lowest low water______Â", 
    				option26: "æ_Lower low water______Â", 
    				option27: "æ_Lowest normal low water________Â", 
    				option28: "æ_Mean tide level______Â", 
    				option29: "æ_Indian spring low water________Â", 
    				option30: "æ_High-water full and charge_________Â", 
    				option31: "æ_Low-water full and charge_________Â", 
    				option32: "æ_Columbia River datum_______Â", 
    				option33: "æ_Gulf Coast low water datum_________Â", 
    				option34: "æ_Equatorial springs low water_________Â", 
    				option35: "æ_Approximate lowest astronomical tide____________Â", 
    				option36: "æ_No correction_____Â"
    			},
    			depthres: "æ_Depth Resolution______Â",
    			depthdu: {
    				caption: "æ_Depth Distance Units_______Â",
    				meters: "æ_Meters___Â",
    				feet: "æ_Feet__Â"
    			},   			
    			depthem: {
    				caption: "æ_Depth Encoding Method_______Â",
    				explicit: "æ_Explicit depth coordinate included with horizontal coordinates____________________Â",
    				implicit: "æ_Implicit coordinate_______Â",
    				attribute: "æ_Attribute values______Â"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "æ_Time Period Information________Â",
    	sngdate: "æ_Single Date____Â",
    	mdattim: "æ_Multiple Dates_____Â",
    	rngdates: "æ_Date Range____Â",
    	caldate: "æ_Date__Â",
    	time: "æ_Time__Â",
    	begdate: "æ_Beginning Date_____Â",
    	begtime: "æ_Beginning Time_____Â",
    	enddate: "æ_Ending Date____Â",
    	endtime: "æ_Ending Time____Â"
    }
   
  })
);
