define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "Ř_FGDC__ů",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "Ř_None__ů",
    	notComplete: "Ř_Not complete_____ů",
    	other: "Ř_Other___ů",
    	present: "Ř_Present___ů",
    	unknown: "Ř_Unknown___ů",
    	unpublishedMaterial: "Ř_Unpublished material_______ů"
    },
    
    hints: {
    	integerGreaterThanOne: "Ř_(enter an integer > 1)________ů",
    	integer0To100: "Ř_(enter an integer 0..100)_________ů"
    },
    
    citeinfo: {
    	caption: "Ř_Citation Information_______ů",
    	origin: "Ř_Originator____ů",
    	pubdate: "Ř_Publication Date______ů",
    	pubtime: "Ř_Publication Time______ů",
    	title: "Ř_Title___ů",
    	edition: "Ř_Edition___ů",
    	geoform: {
    		caption: "Ř_Geospatial Data Presentation Form___________ů",
    		atlas: "Ř_Atlas___ů",
    		audio: "Ř_Audio___ů",
    		diagram: "Ř_Diagram___ů",
    		sDocument: "Ř_Document___ů",
    		globe: "Ř_Globe___ů",
    		map: "Ř_Map__ů",
    		model: "Ř_Model___ů",
    		multiMediaPresentation: "Ř_Multimedia presentation________ů",
    		profile: "Ř_Profile___ů",
    		rasterDigitalData: "Ř_Raster digital data_______ů",
    		remoteSensingImage: "Ř_Remote-sensing image_______ů",
    		section: "Ř_Section___ů",
    		spreadsheet: "Ř_Spreadsheet____ů",
    		tabularDigitalData: "Ř_Tabular digital data_______ů",
    		vectorDigitalData: "Ř_Vector digital data_______ů",
    		video: "Ř_Video___ů",
    		view: "Ř_View__ů"
    	},
    	serinfo: {
    		caption: "Ř_Series Information______ů",
    		sername: "Ř_Series Name____ů",
    		issue: "Ř_Issue Identification_______ů"
    	},
    	pubinfo: {
    		caption: "Ř_Publication Information________ů",
    		pubplace: "Ř_Publication Place______ů",
    		publish: "Ř_Publisher____ů"
    	},
    	othercit: "Ř_Other Citation Details________ů",
    	onlink: "Ř_Online Linkage (URL)_______ů"
    },
    
    cntinfo: {
    	caption: "Ř_Contact Information_______ů",
    	section: {
    		primary: "Ř_Primary___ů",
    		phoneAndEmail: "Ř_Phone and E-Mail______ů",
    		hoursAndInstructions: "Ř_Hours and Instructions________ů"
    	},
    	cntorgp: {
    		caption: "Ř_By organization______ů",
    		cntorg: "Ř_Organization_____ů",
    		cntper: "Ř_Person___ů"
    	},
    	cntperp: {
    		caption: "Ř_By person____ů",
    		cntper: "Ř_Person___ů",
    		cntorg: "Ř_Organization_____ů"
    	},
    	cntpos: "Ř_Position___ů",
    	cntaddr: {
    		caption: "Ř_Address___ů",
    		addrtype: {
    			caption: "Ř_Address Type_____ů",
    			mailing: "Ř_Mailing___ů",
    			physical: "Ř_Physical___ů",
    			mailingAndPhysical: "Ř_Mailing and Physical_______ů"
    		},
    		address: "Ř_Address___ů",
    		city: "Ř_City__ů",
    		state: "Ř_State___ů",
    		postal: "Ř_Postal Code____ů",
    		country: "Ř_Country___ů"
    	},
    	cntvoice: "Ř_Voice___ů",
    	cnttdd: "Ř_TDD/TTY Telephone (hearing impaired)____________ů",
    	cntfax: "Ř_Fax__ů",
    	cntemail: "Ř_E-Mail Address_____ů",
    	hours: "Ř_Hours___ů",
    	cntinst: "Ř_Instructions_____ů"
    },
    
    dataqual: {
    	caption: "Ř_Data Quality Information________ů",
    	section: {
    		attributeAccuracy: "Ř_Attribute Accuracy______ů",
    		logicalConsistency: "Ř_Logical Consistency_______ů",
    		completeness: "Ř_Completeness_____ů",
    		positionalAccuracy: "Ř_Positional Accuracy_______ů",
    		lineage: "Ř_Lineage___ů",
    		cloudCover: "Ř_Cloud Cover____ů"
    	},
    	attracc: {
    		caption: "Ř_Attribute Accuracy______ů",
    		attraccr: "Ř_Attribute Accuracy Report_________ů",
    		qattracc: {
    			caption: "Ř_Quantitative Attribute Accuracy Assessment______________ů",
    			attraccv: "Ř_Attribute Accuracy Value________ů",
    			attracce: "Ř_Attribute Accuracy Explanation__________ů"
    		}
    	},
    	logic: "Ř_Logical Consistency Report_________ů",
    	complete: "Ř_Completeness Report_______ů",
    	posacc: "Ř_Positional Accuracy_______ů",
    	horizpa: {
    		caption: "Ř_Horizontal Positional Accuracy__________ů",
    		horizpar: "Ř_Horizontal Positional Accuracy Report____________ů",
    		qhorizpa: {
    			caption: "Ř_Quantitative Horizontal Positional Accuracy Assessment_________________ů",
    			horizpav: "Ř_Horizontal Positional Accuracy Value____________ů",
    			horizpae: "Ř_Horizontal Positional Accuracy Explanation______________ů"
    		}
    	},
    	vertacc: {
    		caption: "Ř_Vertical Positional Accuracy_________ů",
    		vertaccr: "Ř_Vertical Positional Accuracy Report____________ů",
    		qvertpa: {
    			caption: "Ř_Quantitative Vertical Positional Accuracy Assessment_________________ů",
    			vertaccv: "Ř_Vertical Positional Accuracy Value___________ů",
    			vertacce: "Ř_Vertical Positional Accuracy Explanation_____________ů"
    		}
    	},
    	lineage: {
    		caption: "Ř_Lineage___ů"
    	},
    	srcinfo: {
    		caption: "Ř_Source Information______ů",
    		srccite: "Ř_Source Citation______ů",
    		srcscale: "Ř_Source Scale Denominator________ů",
    		typesrc: {
    			caption: "Ř_Type of Source Media_______ů",
    			paper: "Ř_Paper___ů",
    			stableBaseMaterial: "Ř_Stable-base material_______ů",
    			microfiche: "Ř_Microfiche____ů",
    			microfilm: "Ř_Microfilm____ů",
    			audiocassette: "Ř_Audio cassette_____ů",
    			chart: "Ř_Chart___ů",
    			filmstrip: "Ř_Film strip____ů",
    			transparency: "Ř_Transparency_____ů",
    			videocassette: "Ř_Video cassette_____ů",
    			videodisc: "Ř_Video disc____ů",
    			videotape: "Ř_Video tape____ů",
    			physicalModel: "Ř_Physical model_____ů",
    			computerProgram: "Ř_Computer program______ů",
    			disc: "Ř_Disc__ů",
    			cartridgeTape: "Ř_Cartridge tape_____ů",
    			magneticTape: "Ř_Magnetic tape_____ů",
    			online: "Ř_Online___ů",
    			cdrom: "Ř_CD-ROM___ů",
    			electronicBulletinBoard: "Ř_Electronic bulletin board_________ů",
    			electronicMailSystem: "Ř_Electronic mail system________ů"
    		},
    		srctime: "Ř_Source Time Period of Content__________ů",
    		srccurr: "Ř_Source Currentness Reference_________ů",
    		srccitea: "Ř_Source Citation Abbreviation_________ů",
    		srccontr: "Ř_Source Contribution_______ů"
    	},
    	procstep: {
    		caption: "Ř_Process Step_____ů",
    		procdesc: "Ř_Process Description_______ů",
    		srcused: "Ř_Source Used Citation Abbreviation___________ů",
    		procdate: "Ř_Process Date_____ů",
    		proctime: "Ř_Process Time_____ů",
    		srcprod: "Ř_Source Produced Citation Abbreviation____________ů",
    		proccont: "Ř_Process Contact______ů"
    	},
    	cloud: "Ř_Cloud Cover____ů"
    },
    
    distinfo: {
    	caption: "Ř_Distribution Information________ů",
    	section: {
    		distributor: "Ř_Distributor____ů",
    		description: "Ř_Description____ů",
    		orderProcess: "Ř_Order Process_____ů",
    		prerequisites: "Ř_Prerequisites_____ů",
    		availability: "Ř_Availability_____ů"
    	},
    	distrib: "Ř_Distributor____ů",
    	resdesc: {
    		caption: "Ř_Resource Description_______ů",
    		liveData: "Ř_Live Data and Maps______ů",
    		downloadableData: "Ř_Downloadable Data______ů",
    		offlineData: "Ř_Offline Data_____ů",
    		staticMapImages: "Ř_Static Map Images______ů",
    		sDocument: "Ř_Other Documents______ů",
    		application: "Ř_Applications_____ů",
    		geographicService: "Ř_Geographic Services_______ů",
    		clearingHouse: "Ř_Clearinghouses_____ů",
    		mapFiles: "Ř_Map Files____ů",
    		geographicActivies: "Ř_Geographic Activities_______ů"
    	},
    	distliab: "Ř_Distribution Liability Statement___________ů",
    	custom: "Ř_Custom Order Process_______ů",
    	techpreq: "Ř_Technical Prerequisites________ů",
    	availabl: "Ř_Availability_____ů"
    },
    
    eainfo: {
    	caption: "Ř_Entity and Attribute Information___________ů",
    	overview: "Ř_Overview Description_______ů",
    	eaover: "Ř_Entity and Attribute Overview__________ů",
    	eadetcit: "Ř_Entity and Attribute Detail Citation____________ů"
    },
    
    idinfo: {
    	caption: "Ř_Identification Information_________ů",
    	section: {
    		timeAndStatus: "Ř_Time and Status______ů",
    		constraints: "Ř_Constraints____ů",
    		contact: "Ř_Contact___ů",
    		additional: "Ř_Additional____ů"
    	},
    	citeinfo: "Ř_Citation___ů",
    	descript: {
    		caption: "Ř_Description____ů",
    		sAbstract: "Ř_Abstract___ů",
    		purpose: "Ř_Purpose___ů",
    		supplinf: "Ř_Supplemental Information________ů"
    	},
    	timeperd: {
    		caption: "Ř_Time Period of Content________ů",
    		current: {
    			caption: "Ř_Currentness Reference_______ů",
    			groundCondition: "Ř_Ground Condition______ů",
    			publicationDate: "Ř_Publication Date______ů"
    		}
    	},
    	status: {
    		caption: "Ř_Status___ů",
    		progress: {
    			caption: "Ř_Progress___ů",
     			complete: "Ř_Complete___ů",
    			inWork: "Ř_In work___ů",
    			planned: "Ř_Planned___ů"
    		},
    		update: {
    			caption: "Ř_Maintenance and Update Frequency___________ů",
    			continual: "Ř_Continual____ů",
    			daily: "Ř_Daily___ů",
    			weekly: "Ř_Weekly___ů",
    			monthly: "Ř_Monthly___ů",
    			annually: "Ř_Annually___ů",
    			unknown: "Ř_Unknown___ů",
    			asNeeded: "Ř_As needed____ů",
    			irregular: "Ř_Irregular____ů",
    			nonePlanned: "Ř_None planned_____ů"
    		}
    	},
    	spdom: {
    		caption: "Ř_Extent___ů",
    		bounding: {
    			caption: "Ř_Bounding Coordinates_______ů",
    			westbc: "Ř_West Bounding Longitude________ů",
    			eastbc: "Ř_East Bounding Longitude________ů",
    			northbc: "Ř_North Bounding Latitude________ů",
    			southbc: "Ř_South Bounding Latitude________ů"
    		}
    	},
      keywords: {
        caption: "Klíčová slova",
        theme: "Téma",
        place: "Místo",
        stratum: "Vrstva",
        temporal: "Časové",
        thesaursus: "Přidružený tezaurus",
        delimited: "Klíčová slova",
        themektIsoTopicCategory: "Téma ISO…",
        themektIsoTopicDialog: "Téma ISO",
        placektGnis: "Informační systém geografických názvů"
      },
      accconst: "Omezení přístupu",
      useconst: "Omezení použití",
      ptcontac: "Kontaktní místo pro zdroj",
      browse: {
      	caption: "Ř_Browse Graphic_____ů",
      	browsen: "Ř_Browse Graphic URL______ů",
      	browsed: "Ř_Browse Graphic File Description__________ů",
      	browset: "Ř_Browse Graphic File Type________ů"
      },
      datacred: "Kredit datové sady",
      secinfo: {
      	caption: "Ř_Security Information_______ů",
      	secsys: "Ř_Security Classification System__________ů",
      	secclass: {
      		caption: "Ř_Security Classification________ů",
      		topSecret: "Ř_Top secret____ů",
      		secret: "Ř_Secret___ů",
      		confidential: "Ř_Confidential_____ů",
      		restricted: "Ř_Restricted____ů",
      		unclassified: "Ř_Unclassified_____ů",
      		sensitive: "Ř_Sensitive____ů"
      	},
      	sechandl: "Ř_Security Handling Description__________ů"
      },
      sNative: "Prostředí nativní datové sady",
      crossref: "Křížový odkaz"
    },
    
    metadata: {
    	idinfo: "Ř_Identification_____ů",
    	dataqual: "Ř_Quality___ů",
    	spdoinfo: "Ř_Spatial Data Organization_________ů",
    	spref: "Ř_Spatial Reference______ů",
    	eainfo: "Ř_Entity and Attribute_______ů",
    	distinfo: "Ř_Distribution_____ů",
    	metainfo: "Ř_Metadata___ů"
    },
    
    metainfo: {
    	caption: "Ř_Metadata Information_______ů",
    	section: {
    		dates: "Ř_Metadata Dates_____ů",
    		contact: "Ř_Metadata Contact______ů",
    		standard: "Ř_Metadata Standard______ů",
    		additional: "Ř_Additional____ů"
    	},
      metd: "Datum metadat",
      metrd: "Datum revize metadat",
      metfrd: "Datum příští revize metadat",
      metstdn: "Název standardu metadat",
      metstdv: "Verze standardu metadat",
      metac: "Omezení přístupu k metadatům",
      metuc: "Omezení použití metadat",
      metsi: {
      	caption: "Ř_Metadata Security Information__________ů",
      	metscs: "Ř_Metadata Security Classification System_____________ů",
      	metsc: "Ř_Metadata Security Classification___________ů",
      	metshd: "Ř_Metadata Security Handling Description____________ů"
      }
    },
    
    spref: {
    	caption: "Ř_Spatial Reference Information__________ů",
    	horizsys: {
    		caption: "Ř_Horizontal Coordinate System_________ů",
    		geograph: {
    			caption: "Ř_Geographic____ů",
    			latres: "Ř_Latitude Resolution_______ů",
    			longres: "Ř_Longitude Resolution_______ů",
    			geogunit: {
    				caption: "Ř_Geographic Coordinate Units_________ů",
    				decimalDegrees: "Ř_Decimal degrees______ů",
    				decimalMinutes: "Ř_Decimal minutes______ů",
    				decimalSeconds: "Ř_Decimal seconds______ů",
    				degreesAndDecimalMinutes: "Ř_Degrees and decimal minutes_________ů",
    				degreesMinutesAndDecimalSeconds: "Ř_Degrees, minutes, and decimal seconds____________ů",
    				radians: "Ř_Radians___ů",
    				grads: "Ř_Grads___ů"
    			}
    		},
    		planar: {
    			caption: "Ř_Planar___ů"
    		},
    		local: {
    			caption: "Ř_Local___ů",
    			localdes: "Ř_Local Description______ů",
    			localgeo: "Ř_Local Georeference Information__________ů"
    		},
    		geodetic: {
    			caption: "Ř_Geodetic Model_____ů",
    			horizdn: {
    				caption: "Ř_Horizontal Datum Name_______ů",
    				nad83: "Ř_North American Datum of 1983_________ů",
    				nad27: "Ř_North American Datum of 1927_________ů"
    			},
    			ellips: {
    				caption: "Ř_Ellipsoid Name_____ů",
    				grs80: "Ř_Geodetic Reference System 80_________ů",
    				clarke1866: "Ř_Clarke 1866____ů"
    			},
    			semiaxis: "Ř_Semi-major Axis______ů",
    			denflat: "Ř_Denominator of Flattening Ratio__________ů"
    		}
    	},
    	vertdef: {
    		caption: "Ř_Vertical Coordinate System_________ů",
    		altsys: {
    			caption: "Ř_Altitude System______ů",
    			altdatum: {
    				caption: "Ř_Altitude Datum Name_______ů",
    				navd88: "Ř_North American Vertical Datum of 1988____________ů",
    				ngvd29: "Ř_National Geodetic Vertical Datum of 1929_____________ů"
    			},
    			altres: "Ř_Altitude Resolution_______ů",
    			altunits: {
    				caption: "Ř_Altitude Distance Units________ů",
    				meters: "Ř_Meters___ů",
    				feet: "Ř_Feet__ů"
    			},
    			altenc: {
    				caption: "Ř_Altitude Encoding Method________ů",
    				explicit: "Ř_Explicit elevation coordinate included with horizontal coordinates_____________________ů",
    				implicit: "Ř_Implicit coordinate_______ů",
    				attribute: "Ř_Attribute values______ů"
    			}
    		},
    		depthsys: {
    			caption: "Ř_Depth System_____ů",
    			depthdn: {
    				caption: "Ř_Depth Datum Name______ů",
    				option1: "Ř_Local surface_____ů", 
    				option2: "Ř_Chart datum; datum for sounding reduction_____________ů", 
    				option3: "Ř_Lowest astronomical tide________ů", 
    				option4: "Ř_Highest astronomical tide_________ů", 
    				option5: "Ř_Mean low water_____ů", 
    				option6: "Ř_Mean high water______ů", 
    				option7: "Ř_Mean sea level_____ů", 
    				option8: "Ř_Land survey datum______ů", 
    				option9: "Ř_Mean low water springs________ů", 
    				option10: "Ř_Mean high water springs________ů", 
    				option11: "Ř_Mean low water neap_______ů", 
    				option12: "Ř_Mean high water neap_______ů", 
    				option13: "Ř_Mean lower low water_______ů", 
    				option14: "Ř_Mean lower low water springs_________ů", 
    				option15: "Ř_Mean higher high water________ů", 
    				option16: "Ř_Mean higher low water_______ů", 
    				option17: "Ř_Mean lower high water_______ů", 
    				option18: "Ř_Spring tide____ů", 
    				option19: "Ř_Tropic lower low water________ů", 
    				option20: "Ř_Neap tide____ů", 
    				option21: "Ř_High water____ů", 
    				option22: "Ř_Higher high water______ů", 
    				option23: "Ř_Low water____ů", 
    				option24: "Ř_Low-water datum______ů", 
    				option25: "Ř_Lowest low water______ů", 
    				option26: "Ř_Lower low water______ů", 
    				option27: "Ř_Lowest normal low water________ů", 
    				option28: "Ř_Mean tide level______ů", 
    				option29: "Ř_Indian spring low water________ů", 
    				option30: "Ř_High-water full and charge_________ů", 
    				option31: "Ř_Low-water full and charge_________ů", 
    				option32: "Ř_Columbia River datum_______ů", 
    				option33: "Ř_Gulf Coast low water datum_________ů", 
    				option34: "Ř_Equatorial springs low water_________ů", 
    				option35: "Ř_Approximate lowest astronomical tide____________ů", 
    				option36: "Ř_No correction_____ů"
    			},
    			depthres: "Ř_Depth Resolution______ů",
    			depthdu: {
    				caption: "Ř_Depth Distance Units_______ů",
    				meters: "Ř_Meters___ů",
    				feet: "Ř_Feet__ů"
    			},   			
    			depthem: {
    				caption: "Ř_Depth Encoding Method_______ů",
    				explicit: "Ř_Explicit depth coordinate included with horizontal coordinates____________________ů",
    				implicit: "Ř_Implicit coordinate_______ů",
    				attribute: "Ř_Attribute values______ů"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "Ř_Time Period Information________ů",
    	sngdate: "Ř_Single Date____ů",
    	mdattim: "Ř_Multiple Dates_____ů",
    	rngdates: "Ř_Date Range____ů",
    	caldate: "Ř_Date__ů",
    	time: "Ř_Time__ů",
    	begdate: "Ř_Beginning Date_____ů",
    	begtime: "Ř_Beginning Time_____ů",
    	enddate: "Ř_Ending Date____ů",
    	endtime: "Ř_Ending Time____ů"
    }
   
  })
);
