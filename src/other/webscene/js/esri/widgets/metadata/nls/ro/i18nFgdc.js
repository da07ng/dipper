define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "Ă_FGDC__ș",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "Ă_None__ș",
    	notComplete: "Ă_Not complete_____ș",
    	other: "Ă_Other___ș",
    	present: "Ă_Present___ș",
    	unknown: "Ă_Unknown___ș",
    	unpublishedMaterial: "Ă_Unpublished material_______ș"
    },
    
    hints: {
    	integerGreaterThanOne: "Ă_(enter an integer > 1)________ș",
    	integer0To100: "Ă_(enter an integer 0..100)_________ș"
    },
    
    citeinfo: {
    	caption: "Ă_Citation Information_______ș",
    	origin: "Ă_Originator____ș",
    	pubdate: "Ă_Publication Date______ș",
    	pubtime: "Ă_Publication Time______ș",
    	title: "Ă_Title___ș",
    	edition: "Ă_Edition___ș",
    	geoform: {
    		caption: "Ă_Geospatial Data Presentation Form___________ș",
    		atlas: "Ă_Atlas___ș",
    		audio: "Ă_Audio___ș",
    		diagram: "Ă_Diagram___ș",
    		sDocument: "Ă_Document___ș",
    		globe: "Ă_Globe___ș",
    		map: "Ă_Map__ș",
    		model: "Ă_Model___ș",
    		multiMediaPresentation: "Ă_Multimedia presentation________ș",
    		profile: "Ă_Profile___ș",
    		rasterDigitalData: "Ă_Raster digital data_______ș",
    		remoteSensingImage: "Ă_Remote-sensing image_______ș",
    		section: "Ă_Section___ș",
    		spreadsheet: "Ă_Spreadsheet____ș",
    		tabularDigitalData: "Ă_Tabular digital data_______ș",
    		vectorDigitalData: "Ă_Vector digital data_______ș",
    		video: "Ă_Video___ș",
    		view: "Ă_View__ș"
    	},
    	serinfo: {
    		caption: "Ă_Series Information______ș",
    		sername: "Ă_Series Name____ș",
    		issue: "Ă_Issue Identification_______ș"
    	},
    	pubinfo: {
    		caption: "Ă_Publication Information________ș",
    		pubplace: "Ă_Publication Place______ș",
    		publish: "Ă_Publisher____ș"
    	},
    	othercit: "Ă_Other Citation Details________ș",
    	onlink: "Ă_Online Linkage (URL)_______ș"
    },
    
    cntinfo: {
    	caption: "Ă_Contact Information_______ș",
    	section: {
    		primary: "Ă_Primary___ș",
    		phoneAndEmail: "Ă_Phone and E-Mail______ș",
    		hoursAndInstructions: "Ă_Hours and Instructions________ș"
    	},
    	cntorgp: {
    		caption: "Ă_By organization______ș",
    		cntorg: "Ă_Organization_____ș",
    		cntper: "Ă_Person___ș"
    	},
    	cntperp: {
    		caption: "Ă_By person____ș",
    		cntper: "Ă_Person___ș",
    		cntorg: "Ă_Organization_____ș"
    	},
    	cntpos: "Ă_Position___ș",
    	cntaddr: {
    		caption: "Ă_Address___ș",
    		addrtype: {
    			caption: "Ă_Address Type_____ș",
    			mailing: "Ă_Mailing___ș",
    			physical: "Ă_Physical___ș",
    			mailingAndPhysical: "Ă_Mailing and Physical_______ș"
    		},
    		address: "Ă_Address___ș",
    		city: "Ă_City__ș",
    		state: "Ă_State___ș",
    		postal: "Ă_Postal Code____ș",
    		country: "Ă_Country___ș"
    	},
    	cntvoice: "Ă_Voice___ș",
    	cnttdd: "Ă_TDD/TTY Telephone (hearing impaired)____________ș",
    	cntfax: "Ă_Fax__ș",
    	cntemail: "Ă_E-Mail Address_____ș",
    	hours: "Ă_Hours___ș",
    	cntinst: "Ă_Instructions_____ș"
    },
    
    dataqual: {
    	caption: "Ă_Data Quality Information________ș",
    	section: {
    		attributeAccuracy: "Ă_Attribute Accuracy______ș",
    		logicalConsistency: "Ă_Logical Consistency_______ș",
    		completeness: "Ă_Completeness_____ș",
    		positionalAccuracy: "Ă_Positional Accuracy_______ș",
    		lineage: "Ă_Lineage___ș",
    		cloudCover: "Ă_Cloud Cover____ș"
    	},
    	attracc: {
    		caption: "Ă_Attribute Accuracy______ș",
    		attraccr: "Ă_Attribute Accuracy Report_________ș",
    		qattracc: {
    			caption: "Ă_Quantitative Attribute Accuracy Assessment______________ș",
    			attraccv: "Ă_Attribute Accuracy Value________ș",
    			attracce: "Ă_Attribute Accuracy Explanation__________ș"
    		}
    	},
    	logic: "Ă_Logical Consistency Report_________ș",
    	complete: "Ă_Completeness Report_______ș",
    	posacc: "Ă_Positional Accuracy_______ș",
    	horizpa: {
    		caption: "Ă_Horizontal Positional Accuracy__________ș",
    		horizpar: "Ă_Horizontal Positional Accuracy Report____________ș",
    		qhorizpa: {
    			caption: "Ă_Quantitative Horizontal Positional Accuracy Assessment_________________ș",
    			horizpav: "Ă_Horizontal Positional Accuracy Value____________ș",
    			horizpae: "Ă_Horizontal Positional Accuracy Explanation______________ș"
    		}
    	},
    	vertacc: {
    		caption: "Ă_Vertical Positional Accuracy_________ș",
    		vertaccr: "Ă_Vertical Positional Accuracy Report____________ș",
    		qvertpa: {
    			caption: "Ă_Quantitative Vertical Positional Accuracy Assessment_________________ș",
    			vertaccv: "Ă_Vertical Positional Accuracy Value___________ș",
    			vertacce: "Ă_Vertical Positional Accuracy Explanation_____________ș"
    		}
    	},
    	lineage: {
    		caption: "Ă_Lineage___ș"
    	},
    	srcinfo: {
    		caption: "Ă_Source Information______ș",
    		srccite: "Ă_Source Citation______ș",
    		srcscale: "Ă_Source Scale Denominator________ș",
    		typesrc: {
    			caption: "Ă_Type of Source Media_______ș",
    			paper: "Ă_Paper___ș",
    			stableBaseMaterial: "Ă_Stable-base material_______ș",
    			microfiche: "Ă_Microfiche____ș",
    			microfilm: "Ă_Microfilm____ș",
    			audiocassette: "Ă_Audio cassette_____ș",
    			chart: "Ă_Chart___ș",
    			filmstrip: "Ă_Film strip____ș",
    			transparency: "Ă_Transparency_____ș",
    			videocassette: "Ă_Video cassette_____ș",
    			videodisc: "Ă_Video disc____ș",
    			videotape: "Ă_Video tape____ș",
    			physicalModel: "Ă_Physical model_____ș",
    			computerProgram: "Ă_Computer program______ș",
    			disc: "Ă_Disc__ș",
    			cartridgeTape: "Ă_Cartridge tape_____ș",
    			magneticTape: "Ă_Magnetic tape_____ș",
    			online: "Ă_Online___ș",
    			cdrom: "Ă_CD-ROM___ș",
    			electronicBulletinBoard: "Ă_Electronic bulletin board_________ș",
    			electronicMailSystem: "Ă_Electronic mail system________ș"
    		},
    		srctime: "Ă_Source Time Period of Content__________ș",
    		srccurr: "Ă_Source Currentness Reference_________ș",
    		srccitea: "Ă_Source Citation Abbreviation_________ș",
    		srccontr: "Ă_Source Contribution_______ș"
    	},
    	procstep: {
    		caption: "Ă_Process Step_____ș",
    		procdesc: "Ă_Process Description_______ș",
    		srcused: "Ă_Source Used Citation Abbreviation___________ș",
    		procdate: "Ă_Process Date_____ș",
    		proctime: "Ă_Process Time_____ș",
    		srcprod: "Ă_Source Produced Citation Abbreviation____________ș",
    		proccont: "Ă_Process Contact______ș"
    	},
    	cloud: "Ă_Cloud Cover____ș"
    },
    
    distinfo: {
    	caption: "Ă_Distribution Information________ș",
    	section: {
    		distributor: "Ă_Distributor____ș",
    		description: "Ă_Description____ș",
    		orderProcess: "Ă_Order Process_____ș",
    		prerequisites: "Ă_Prerequisites_____ș",
    		availability: "Ă_Availability_____ș"
    	},
    	distrib: "Ă_Distributor____ș",
    	resdesc: {
    		caption: "Ă_Resource Description_______ș",
    		liveData: "Ă_Live Data and Maps______ș",
    		downloadableData: "Ă_Downloadable Data______ș",
    		offlineData: "Ă_Offline Data_____ș",
    		staticMapImages: "Ă_Static Map Images______ș",
    		sDocument: "Ă_Other Documents______ș",
    		application: "Ă_Applications_____ș",
    		geographicService: "Ă_Geographic Services_______ș",
    		clearingHouse: "Ă_Clearinghouses_____ș",
    		mapFiles: "Ă_Map Files____ș",
    		geographicActivies: "Ă_Geographic Activities_______ș"
    	},
    	distliab: "Ă_Distribution Liability Statement___________ș",
    	custom: "Ă_Custom Order Process_______ș",
    	techpreq: "Ă_Technical Prerequisites________ș",
    	availabl: "Ă_Availability_____ș"
    },
    
    eainfo: {
    	caption: "Ă_Entity and Attribute Information___________ș",
    	overview: "Ă_Overview Description_______ș",
    	eaover: "Ă_Entity and Attribute Overview__________ș",
    	eadetcit: "Ă_Entity and Attribute Detail Citation____________ș"
    },
    
    idinfo: {
    	caption: "Ă_Identification Information_________ș",
    	section: {
    		timeAndStatus: "Ă_Time and Status______ș",
    		constraints: "Ă_Constraints____ș",
    		contact: "Ă_Contact___ș",
    		additional: "Ă_Additional____ș"
    	},
    	citeinfo: "Ă_Citation___ș",
    	descript: {
    		caption: "Ă_Description____ș",
    		sAbstract: "Ă_Abstract___ș",
    		purpose: "Ă_Purpose___ș",
    		supplinf: "Ă_Supplemental Information________ș"
    	},
    	timeperd: {
    		caption: "Ă_Time Period of Content________ș",
    		current: {
    			caption: "Ă_Currentness Reference_______ș",
    			groundCondition: "Ă_Ground Condition______ș",
    			publicationDate: "Ă_Publication Date______ș"
    		}
    	},
    	status: {
    		caption: "Ă_Status___ș",
    		progress: {
    			caption: "Ă_Progress___ș",
     			complete: "Ă_Complete___ș",
    			inWork: "Ă_In work___ș",
    			planned: "Ă_Planned___ș"
    		},
    		update: {
    			caption: "Ă_Maintenance and Update Frequency___________ș",
    			continual: "Ă_Continual____ș",
    			daily: "Ă_Daily___ș",
    			weekly: "Ă_Weekly___ș",
    			monthly: "Ă_Monthly___ș",
    			annually: "Ă_Annually___ș",
    			unknown: "Ă_Unknown___ș",
    			asNeeded: "Ă_As needed____ș",
    			irregular: "Ă_Irregular____ș",
    			nonePlanned: "Ă_None planned_____ș"
    		}
    	},
    	spdom: {
    		caption: "Ă_Extent___ș",
    		bounding: {
    			caption: "Ă_Bounding Coordinates_______ș",
    			westbc: "Ă_West Bounding Longitude________ș",
    			eastbc: "Ă_East Bounding Longitude________ș",
    			northbc: "Ă_North Bounding Latitude________ș",
    			southbc: "Ă_South Bounding Latitude________ș"
    		}
    	},
      keywords: {
        caption: "Keywords",
        theme: "Temă",
        place: "Loc",
        stratum: "Stratificare",
        temporal: "Temporal",
        thesaursus: "Dicţionar asociat",
        delimited: "Keywords",
        themektIsoTopicCategory: "Subiect ISO...",
        themektIsoTopicDialog: "Subiect ISO",
        placektGnis: "Sistem informaţii nume geografice"
      },
      accconst: "Restricţii de acces",
      useconst: "Utilizare restricţii",
      ptcontac: "Punct de contact pentru resursă",
      browse: {
      	caption: "Ă_Browse Graphic_____ș",
      	browsen: "Ă_Browse Graphic URL______ș",
      	browsed: "Ă_Browse Graphic File Description__________ș",
      	browset: "Ă_Browse Graphic File Type________ș"
      },
      datacred: "Credit set de date",
      secinfo: {
      	caption: "Ă_Security Information_______ș",
      	secsys: "Ă_Security Classification System__________ș",
      	secclass: {
      		caption: "Ă_Security Classification________ș",
      		topSecret: "Ă_Top secret____ș",
      		secret: "Ă_Secret___ș",
      		confidential: "Ă_Confidential_____ș",
      		restricted: "Ă_Restricted____ș",
      		unclassified: "Ă_Unclassified_____ș",
      		sensitive: "Ă_Sensitive____ș"
      	},
      	sechandl: "Ă_Security Handling Description__________ș"
      },
      sNative: "Mediu set de date nativ",
      crossref: "Referinţă încrucişată"
    },
    
    metadata: {
    	idinfo: "Ă_Identification_____ș",
    	dataqual: "Ă_Quality___ș",
    	spdoinfo: "Ă_Spatial Data Organization_________ș",
    	spref: "Ă_Spatial Reference______ș",
    	eainfo: "Ă_Entity and Attribute_______ș",
    	distinfo: "Ă_Distribution_____ș",
    	metainfo: "Ă_Metadata___ș"
    },
    
    metainfo: {
    	caption: "Ă_Metadata Information_______ș",
    	section: {
    		dates: "Ă_Metadata Dates_____ș",
    		contact: "Ă_Metadata Contact______ș",
    		standard: "Ă_Metadata Standard______ș",
    		additional: "Ă_Additional____ș"
    	},
      metd: "Dată metadate",
      metrd: "Dată revizuire metadate",
      metfrd: "Dată revizuire viitoare metadate",
      metstdn: "Nume standard metadate",
      metstdv: "Versiune standard metadate",
      metac: "Restricţii acces metadate",
      metuc: "Restricţii utilizare metadate",
      metsi: {
      	caption: "Ă_Metadata Security Information__________ș",
      	metscs: "Ă_Metadata Security Classification System_____________ș",
      	metsc: "Ă_Metadata Security Classification___________ș",
      	metshd: "Ă_Metadata Security Handling Description____________ș"
      }
    },
    
    spref: {
    	caption: "Ă_Spatial Reference Information__________ș",
    	horizsys: {
    		caption: "Ă_Horizontal Coordinate System_________ș",
    		geograph: {
    			caption: "Ă_Geographic____ș",
    			latres: "Ă_Latitude Resolution_______ș",
    			longres: "Ă_Longitude Resolution_______ș",
    			geogunit: {
    				caption: "Ă_Geographic Coordinate Units_________ș",
    				decimalDegrees: "Ă_Decimal degrees______ș",
    				decimalMinutes: "Ă_Decimal minutes______ș",
    				decimalSeconds: "Ă_Decimal seconds______ș",
    				degreesAndDecimalMinutes: "Ă_Degrees and decimal minutes_________ș",
    				degreesMinutesAndDecimalSeconds: "Ă_Degrees, minutes, and decimal seconds____________ș",
    				radians: "Ă_Radians___ș",
    				grads: "Ă_Grads___ș"
    			}
    		},
    		planar: {
    			caption: "Ă_Planar___ș"
    		},
    		local: {
    			caption: "Ă_Local___ș",
    			localdes: "Ă_Local Description______ș",
    			localgeo: "Ă_Local Georeference Information__________ș"
    		},
    		geodetic: {
    			caption: "Ă_Geodetic Model_____ș",
    			horizdn: {
    				caption: "Ă_Horizontal Datum Name_______ș",
    				nad83: "Ă_North American Datum of 1983_________ș",
    				nad27: "Ă_North American Datum of 1927_________ș"
    			},
    			ellips: {
    				caption: "Ă_Ellipsoid Name_____ș",
    				grs80: "Ă_Geodetic Reference System 80_________ș",
    				clarke1866: "Ă_Clarke 1866____ș"
    			},
    			semiaxis: "Ă_Semi-major Axis______ș",
    			denflat: "Ă_Denominator of Flattening Ratio__________ș"
    		}
    	},
    	vertdef: {
    		caption: "Ă_Vertical Coordinate System_________ș",
    		altsys: {
    			caption: "Ă_Altitude System______ș",
    			altdatum: {
    				caption: "Ă_Altitude Datum Name_______ș",
    				navd88: "Ă_North American Vertical Datum of 1988____________ș",
    				ngvd29: "Ă_National Geodetic Vertical Datum of 1929_____________ș"
    			},
    			altres: "Ă_Altitude Resolution_______ș",
    			altunits: {
    				caption: "Ă_Altitude Distance Units________ș",
    				meters: "Ă_Meters___ș",
    				feet: "Ă_Feet__ș"
    			},
    			altenc: {
    				caption: "Ă_Altitude Encoding Method________ș",
    				explicit: "Ă_Explicit elevation coordinate included with horizontal coordinates_____________________ș",
    				implicit: "Ă_Implicit coordinate_______ș",
    				attribute: "Ă_Attribute values______ș"
    			}
    		},
    		depthsys: {
    			caption: "Ă_Depth System_____ș",
    			depthdn: {
    				caption: "Ă_Depth Datum Name______ș",
    				option1: "Ă_Local surface_____ș", 
    				option2: "Ă_Chart datum; datum for sounding reduction_____________ș", 
    				option3: "Ă_Lowest astronomical tide________ș", 
    				option4: "Ă_Highest astronomical tide_________ș", 
    				option5: "Ă_Mean low water_____ș", 
    				option6: "Ă_Mean high water______ș", 
    				option7: "Ă_Mean sea level_____ș", 
    				option8: "Ă_Land survey datum______ș", 
    				option9: "Ă_Mean low water springs________ș", 
    				option10: "Ă_Mean high water springs________ș", 
    				option11: "Ă_Mean low water neap_______ș", 
    				option12: "Ă_Mean high water neap_______ș", 
    				option13: "Ă_Mean lower low water_______ș", 
    				option14: "Ă_Mean lower low water springs_________ș", 
    				option15: "Ă_Mean higher high water________ș", 
    				option16: "Ă_Mean higher low water_______ș", 
    				option17: "Ă_Mean lower high water_______ș", 
    				option18: "Ă_Spring tide____ș", 
    				option19: "Ă_Tropic lower low water________ș", 
    				option20: "Ă_Neap tide____ș", 
    				option21: "Ă_High water____ș", 
    				option22: "Ă_Higher high water______ș", 
    				option23: "Ă_Low water____ș", 
    				option24: "Ă_Low-water datum______ș", 
    				option25: "Ă_Lowest low water______ș", 
    				option26: "Ă_Lower low water______ș", 
    				option27: "Ă_Lowest normal low water________ș", 
    				option28: "Ă_Mean tide level______ș", 
    				option29: "Ă_Indian spring low water________ș", 
    				option30: "Ă_High-water full and charge_________ș", 
    				option31: "Ă_Low-water full and charge_________ș", 
    				option32: "Ă_Columbia River datum_______ș", 
    				option33: "Ă_Gulf Coast low water datum_________ș", 
    				option34: "Ă_Equatorial springs low water_________ș", 
    				option35: "Ă_Approximate lowest astronomical tide____________ș", 
    				option36: "Ă_No correction_____ș"
    			},
    			depthres: "Ă_Depth Resolution______ș",
    			depthdu: {
    				caption: "Ă_Depth Distance Units_______ș",
    				meters: "Ă_Meters___ș",
    				feet: "Ă_Feet__ș"
    			},   			
    			depthem: {
    				caption: "Ă_Depth Encoding Method_______ș",
    				explicit: "Ă_Explicit depth coordinate included with horizontal coordinates____________________ș",
    				implicit: "Ă_Implicit coordinate_______ș",
    				attribute: "Ă_Attribute values______ș"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "Ă_Time Period Information________ș",
    	sngdate: "Ă_Single Date____ș",
    	mdattim: "Ă_Multiple Dates_____ș",
    	rngdates: "Ă_Date Range____ș",
    	caldate: "Ă_Date__ș",
    	time: "Ă_Time__ș",
    	begdate: "Ă_Beginning Date_____ș",
    	begtime: "Ă_Beginning Time_____ș",
    	enddate: "Ă_Ending Date____ș",
    	endtime: "Ă_Ending Time____ș"
    }
   
  })
);
