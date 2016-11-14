define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "é_FGDC__È",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "é_None__È",
    	notComplete: "é_Not complete_____È",
    	other: "é_Other___È",
    	present: "é_Present___È",
    	unknown: "é_Unknown___È",
    	unpublishedMaterial: "é_Unpublished material_______È"
    },
    
    hints: {
    	integerGreaterThanOne: "é_(enter an integer > 1)________È",
    	integer0To100: "é_(enter an integer 0..100)_________È"
    },
    
    citeinfo: {
    	caption: "é_Citation Information_______È",
    	origin: "é_Originator____È",
    	pubdate: "é_Publication Date______È",
    	pubtime: "é_Publication Time______È",
    	title: "é_Title___È",
    	edition: "é_Edition___È",
    	geoform: {
    		caption: "é_Geospatial Data Presentation Form___________È",
    		atlas: "é_Atlas___È",
    		audio: "é_Audio___È",
    		diagram: "é_Diagram___È",
    		sDocument: "é_Document___È",
    		globe: "é_Globe___È",
    		map: "é_Map__È",
    		model: "é_Model___È",
    		multiMediaPresentation: "é_Multimedia presentation________È",
    		profile: "é_Profile___È",
    		rasterDigitalData: "é_Raster digital data_______È",
    		remoteSensingImage: "é_Remote-sensing image_______È",
    		section: "é_Section___È",
    		spreadsheet: "é_Spreadsheet____È",
    		tabularDigitalData: "é_Tabular digital data_______È",
    		vectorDigitalData: "é_Vector digital data_______È",
    		video: "é_Video___È",
    		view: "é_View__È"
    	},
    	serinfo: {
    		caption: "é_Series Information______È",
    		sername: "é_Series Name____È",
    		issue: "é_Issue Identification_______È"
    	},
    	pubinfo: {
    		caption: "é_Publication Information________È",
    		pubplace: "é_Publication Place______È",
    		publish: "é_Publisher____È"
    	},
    	othercit: "é_Other Citation Details________È",
    	onlink: "é_Online Linkage (URL)_______È"
    },
    
    cntinfo: {
    	caption: "é_Contact Information_______È",
    	section: {
    		primary: "é_Primary___È",
    		phoneAndEmail: "é_Phone and E-Mail______È",
    		hoursAndInstructions: "é_Hours and Instructions________È"
    	},
    	cntorgp: {
    		caption: "é_By organization______È",
    		cntorg: "é_Organization_____È",
    		cntper: "é_Person___È"
    	},
    	cntperp: {
    		caption: "é_By person____È",
    		cntper: "é_Person___È",
    		cntorg: "é_Organization_____È"
    	},
    	cntpos: "é_Position___È",
    	cntaddr: {
    		caption: "é_Address___È",
    		addrtype: {
    			caption: "é_Address Type_____È",
    			mailing: "é_Mailing___È",
    			physical: "é_Physical___È",
    			mailingAndPhysical: "é_Mailing and Physical_______È"
    		},
    		address: "é_Address___È",
    		city: "é_City__È",
    		state: "é_State___È",
    		postal: "é_Postal Code____È",
    		country: "é_Country___È"
    	},
    	cntvoice: "é_Voice___È",
    	cnttdd: "é_TDD/TTY Telephone (hearing impaired)____________È",
    	cntfax: "é_Fax__È",
    	cntemail: "é_E-Mail Address_____È",
    	hours: "é_Hours___È",
    	cntinst: "é_Instructions_____È"
    },
    
    dataqual: {
    	caption: "é_Data Quality Information________È",
    	section: {
    		attributeAccuracy: "é_Attribute Accuracy______È",
    		logicalConsistency: "é_Logical Consistency_______È",
    		completeness: "é_Completeness_____È",
    		positionalAccuracy: "é_Positional Accuracy_______È",
    		lineage: "é_Lineage___È",
    		cloudCover: "é_Cloud Cover____È"
    	},
    	attracc: {
    		caption: "é_Attribute Accuracy______È",
    		attraccr: "é_Attribute Accuracy Report_________È",
    		qattracc: {
    			caption: "é_Quantitative Attribute Accuracy Assessment______________È",
    			attraccv: "é_Attribute Accuracy Value________È",
    			attracce: "é_Attribute Accuracy Explanation__________È"
    		}
    	},
    	logic: "é_Logical Consistency Report_________È",
    	complete: "é_Completeness Report_______È",
    	posacc: "é_Positional Accuracy_______È",
    	horizpa: {
    		caption: "é_Horizontal Positional Accuracy__________È",
    		horizpar: "é_Horizontal Positional Accuracy Report____________È",
    		qhorizpa: {
    			caption: "é_Quantitative Horizontal Positional Accuracy Assessment_________________È",
    			horizpav: "é_Horizontal Positional Accuracy Value____________È",
    			horizpae: "é_Horizontal Positional Accuracy Explanation______________È"
    		}
    	},
    	vertacc: {
    		caption: "é_Vertical Positional Accuracy_________È",
    		vertaccr: "é_Vertical Positional Accuracy Report____________È",
    		qvertpa: {
    			caption: "é_Quantitative Vertical Positional Accuracy Assessment_________________È",
    			vertaccv: "é_Vertical Positional Accuracy Value___________È",
    			vertacce: "é_Vertical Positional Accuracy Explanation_____________È"
    		}
    	},
    	lineage: {
    		caption: "é_Lineage___È"
    	},
    	srcinfo: {
    		caption: "é_Source Information______È",
    		srccite: "é_Source Citation______È",
    		srcscale: "é_Source Scale Denominator________È",
    		typesrc: {
    			caption: "é_Type of Source Media_______È",
    			paper: "é_Paper___È",
    			stableBaseMaterial: "é_Stable-base material_______È",
    			microfiche: "é_Microfiche____È",
    			microfilm: "é_Microfilm____È",
    			audiocassette: "é_Audio cassette_____È",
    			chart: "é_Chart___È",
    			filmstrip: "é_Film strip____È",
    			transparency: "é_Transparency_____È",
    			videocassette: "é_Video cassette_____È",
    			videodisc: "é_Video disc____È",
    			videotape: "é_Video tape____È",
    			physicalModel: "é_Physical model_____È",
    			computerProgram: "é_Computer program______È",
    			disc: "é_Disc__È",
    			cartridgeTape: "é_Cartridge tape_____È",
    			magneticTape: "é_Magnetic tape_____È",
    			online: "é_Online___È",
    			cdrom: "é_CD-ROM___È",
    			electronicBulletinBoard: "é_Electronic bulletin board_________È",
    			electronicMailSystem: "é_Electronic mail system________È"
    		},
    		srctime: "é_Source Time Period of Content__________È",
    		srccurr: "é_Source Currentness Reference_________È",
    		srccitea: "é_Source Citation Abbreviation_________È",
    		srccontr: "é_Source Contribution_______È"
    	},
    	procstep: {
    		caption: "é_Process Step_____È",
    		procdesc: "é_Process Description_______È",
    		srcused: "é_Source Used Citation Abbreviation___________È",
    		procdate: "é_Process Date_____È",
    		proctime: "é_Process Time_____È",
    		srcprod: "é_Source Produced Citation Abbreviation____________È",
    		proccont: "é_Process Contact______È"
    	},
    	cloud: "é_Cloud Cover____È"
    },
    
    distinfo: {
    	caption: "é_Distribution Information________È",
    	section: {
    		distributor: "é_Distributor____È",
    		description: "é_Description____È",
    		orderProcess: "é_Order Process_____È",
    		prerequisites: "é_Prerequisites_____È",
    		availability: "é_Availability_____È"
    	},
    	distrib: "é_Distributor____È",
    	resdesc: {
    		caption: "é_Resource Description_______È",
    		liveData: "é_Live Data and Maps______È",
    		downloadableData: "é_Downloadable Data______È",
    		offlineData: "é_Offline Data_____È",
    		staticMapImages: "é_Static Map Images______È",
    		sDocument: "é_Other Documents______È",
    		application: "é_Applications_____È",
    		geographicService: "é_Geographic Services_______È",
    		clearingHouse: "é_Clearinghouses_____È",
    		mapFiles: "é_Map Files____È",
    		geographicActivies: "é_Geographic Activities_______È"
    	},
    	distliab: "é_Distribution Liability Statement___________È",
    	custom: "é_Custom Order Process_______È",
    	techpreq: "é_Technical Prerequisites________È",
    	availabl: "é_Availability_____È"
    },
    
    eainfo: {
    	caption: "é_Entity and Attribute Information___________È",
    	overview: "é_Overview Description_______È",
    	eaover: "é_Entity and Attribute Overview__________È",
    	eadetcit: "é_Entity and Attribute Detail Citation____________È"
    },
    
    idinfo: {
    	caption: "é_Identification Information_________È",
    	section: {
    		timeAndStatus: "é_Time and Status______È",
    		constraints: "é_Constraints____È",
    		contact: "é_Contact___È",
    		additional: "é_Additional____È"
    	},
    	citeinfo: "é_Citation___È",
    	descript: {
    		caption: "é_Description____È",
    		sAbstract: "é_Abstract___È",
    		purpose: "é_Purpose___È",
    		supplinf: "é_Supplemental Information________È"
    	},
    	timeperd: {
    		caption: "é_Time Period of Content________È",
    		current: {
    			caption: "é_Currentness Reference_______È",
    			groundCondition: "é_Ground Condition______È",
    			publicationDate: "é_Publication Date______È"
    		}
    	},
    	status: {
    		caption: "é_Status___È",
    		progress: {
    			caption: "é_Progress___È",
     			complete: "é_Complete___È",
    			inWork: "é_In work___È",
    			planned: "é_Planned___È"
    		},
    		update: {
    			caption: "é_Maintenance and Update Frequency___________È",
    			continual: "é_Continual____È",
    			daily: "é_Daily___È",
    			weekly: "é_Weekly___È",
    			monthly: "é_Monthly___È",
    			annually: "é_Annually___È",
    			unknown: "é_Unknown___È",
    			asNeeded: "é_As needed____È",
    			irregular: "é_Irregular____È",
    			nonePlanned: "é_None planned_____È"
    		}
    	},
    	spdom: {
    		caption: "é_Extent___È",
    		bounding: {
    			caption: "é_Bounding Coordinates_______È",
    			westbc: "é_West Bounding Longitude________È",
    			eastbc: "é_East Bounding Longitude________È",
    			northbc: "é_North Bounding Latitude________È",
    			southbc: "é_South Bounding Latitude________È"
    		}
    	},
      keywords: {
        caption: "Parole chiave",
        theme: "Tema",
        place: "Posiziona",
        stratum: "Strato",
        temporal: "Temporale",
        thesaursus: "Thesaurus associato",
        delimited: "Parole chiave",
        themektIsoTopicCategory: "Argomento ISO...",
        themektIsoTopicDialog: "Argomento ISO",
        placektGnis: "Sistema di informazioni nomi geografici"
      },
      accconst: "Vincoli di accesso",
      useconst: "Vincoli d\'uso",
      ptcontac: "Punto di contatto per la risorsa",
      browse: {
      	caption: "é_Browse Graphic_____È",
      	browsen: "é_Browse Graphic URL______È",
      	browsed: "é_Browse Graphic File Description__________È",
      	browset: "é_Browse Graphic File Type________È"
      },
      datacred: "Riconoscimenti dataset",
      secinfo: {
      	caption: "é_Security Information_______È",
      	secsys: "é_Security Classification System__________È",
      	secclass: {
      		caption: "é_Security Classification________È",
      		topSecret: "é_Top secret____È",
      		secret: "é_Secret___È",
      		confidential: "é_Confidential_____È",
      		restricted: "é_Restricted____È",
      		unclassified: "é_Unclassified_____È",
      		sensitive: "é_Sensitive____È"
      	},
      	sechandl: "é_Security Handling Description__________È"
      },
      sNative: "Ambiente dataset nativo",
      crossref: "Riferimento incrociato"
    },
    
    metadata: {
    	idinfo: "é_Identification_____È",
    	dataqual: "é_Quality___È",
    	spdoinfo: "é_Spatial Data Organization_________È",
    	spref: "é_Spatial Reference______È",
    	eainfo: "é_Entity and Attribute_______È",
    	distinfo: "é_Distribution_____È",
    	metainfo: "é_Metadata___È"
    },
    
    metainfo: {
    	caption: "é_Metadata Information_______È",
    	section: {
    		dates: "é_Metadata Dates_____È",
    		contact: "é_Metadata Contact______È",
    		standard: "é_Metadata Standard______È",
    		additional: "é_Additional____È"
    	},
      metd: "Data del Matadati",
      metrd: "Data revisione metadata",
      metfrd: "Data di revisione futura dei metadata",
      metstdn: "Nome standard dei metadati",
      metstdv: "Versione standard dei metadata",
      metac: "Vincoli di accesso ai metadata",
      metuc: "Vincoli di utilizzo dei metadata",
      metsi: {
      	caption: "é_Metadata Security Information__________È",
      	metscs: "é_Metadata Security Classification System_____________È",
      	metsc: "é_Metadata Security Classification___________È",
      	metshd: "é_Metadata Security Handling Description____________È"
      }
    },
    
    spref: {
    	caption: "é_Spatial Reference Information__________È",
    	horizsys: {
    		caption: "é_Horizontal Coordinate System_________È",
    		geograph: {
    			caption: "é_Geographic____È",
    			latres: "é_Latitude Resolution_______È",
    			longres: "é_Longitude Resolution_______È",
    			geogunit: {
    				caption: "é_Geographic Coordinate Units_________È",
    				decimalDegrees: "é_Decimal degrees______È",
    				decimalMinutes: "é_Decimal minutes______È",
    				decimalSeconds: "é_Decimal seconds______È",
    				degreesAndDecimalMinutes: "é_Degrees and decimal minutes_________È",
    				degreesMinutesAndDecimalSeconds: "é_Degrees, minutes, and decimal seconds____________È",
    				radians: "é_Radians___È",
    				grads: "é_Grads___È"
    			}
    		},
    		planar: {
    			caption: "é_Planar___È"
    		},
    		local: {
    			caption: "é_Local___È",
    			localdes: "é_Local Description______È",
    			localgeo: "é_Local Georeference Information__________È"
    		},
    		geodetic: {
    			caption: "é_Geodetic Model_____È",
    			horizdn: {
    				caption: "é_Horizontal Datum Name_______È",
    				nad83: "é_North American Datum of 1983_________È",
    				nad27: "é_North American Datum of 1927_________È"
    			},
    			ellips: {
    				caption: "é_Ellipsoid Name_____È",
    				grs80: "é_Geodetic Reference System 80_________È",
    				clarke1866: "é_Clarke 1866____È"
    			},
    			semiaxis: "é_Semi-major Axis______È",
    			denflat: "é_Denominator of Flattening Ratio__________È"
    		}
    	},
    	vertdef: {
    		caption: "é_Vertical Coordinate System_________È",
    		altsys: {
    			caption: "é_Altitude System______È",
    			altdatum: {
    				caption: "é_Altitude Datum Name_______È",
    				navd88: "é_North American Vertical Datum of 1988____________È",
    				ngvd29: "é_National Geodetic Vertical Datum of 1929_____________È"
    			},
    			altres: "é_Altitude Resolution_______È",
    			altunits: {
    				caption: "é_Altitude Distance Units________È",
    				meters: "é_Meters___È",
    				feet: "é_Feet__È"
    			},
    			altenc: {
    				caption: "é_Altitude Encoding Method________È",
    				explicit: "é_Explicit elevation coordinate included with horizontal coordinates_____________________È",
    				implicit: "é_Implicit coordinate_______È",
    				attribute: "é_Attribute values______È"
    			}
    		},
    		depthsys: {
    			caption: "é_Depth System_____È",
    			depthdn: {
    				caption: "é_Depth Datum Name______È",
    				option1: "é_Local surface_____È", 
    				option2: "é_Chart datum; datum for sounding reduction_____________È", 
    				option3: "é_Lowest astronomical tide________È", 
    				option4: "é_Highest astronomical tide_________È", 
    				option5: "é_Mean low water_____È", 
    				option6: "é_Mean high water______È", 
    				option7: "é_Mean sea level_____È", 
    				option8: "é_Land survey datum______È", 
    				option9: "é_Mean low water springs________È", 
    				option10: "é_Mean high water springs________È", 
    				option11: "é_Mean low water neap_______È", 
    				option12: "é_Mean high water neap_______È", 
    				option13: "é_Mean lower low water_______È", 
    				option14: "é_Mean lower low water springs_________È", 
    				option15: "é_Mean higher high water________È", 
    				option16: "é_Mean higher low water_______È", 
    				option17: "é_Mean lower high water_______È", 
    				option18: "é_Spring tide____È", 
    				option19: "é_Tropic lower low water________È", 
    				option20: "é_Neap tide____È", 
    				option21: "é_High water____È", 
    				option22: "é_Higher high water______È", 
    				option23: "é_Low water____È", 
    				option24: "é_Low-water datum______È", 
    				option25: "é_Lowest low water______È", 
    				option26: "é_Lower low water______È", 
    				option27: "é_Lowest normal low water________È", 
    				option28: "é_Mean tide level______È", 
    				option29: "é_Indian spring low water________È", 
    				option30: "é_High-water full and charge_________È", 
    				option31: "é_Low-water full and charge_________È", 
    				option32: "é_Columbia River datum_______È", 
    				option33: "é_Gulf Coast low water datum_________È", 
    				option34: "é_Equatorial springs low water_________È", 
    				option35: "é_Approximate lowest astronomical tide____________È", 
    				option36: "é_No correction_____È"
    			},
    			depthres: "é_Depth Resolution______È",
    			depthdu: {
    				caption: "é_Depth Distance Units_______È",
    				meters: "é_Meters___È",
    				feet: "é_Feet__È"
    			},   			
    			depthem: {
    				caption: "é_Depth Encoding Method_______È",
    				explicit: "é_Explicit depth coordinate included with horizontal coordinates____________________È",
    				implicit: "é_Implicit coordinate_______È",
    				attribute: "é_Attribute values______È"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "é_Time Period Information________È",
    	sngdate: "é_Single Date____È",
    	mdattim: "é_Multiple Dates_____È",
    	rngdates: "é_Date Range____È",
    	caldate: "é_Date__È",
    	time: "é_Time__È",
    	begdate: "é_Beginning Date_____È",
    	begtime: "é_Beginning Time_____È",
    	enddate: "é_Ending Date____È",
    	endtime: "é_Ending Time____È"
    }
   
  })
);
