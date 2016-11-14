define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "ä_FGDC__Ü",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "ä_None__Ü",
    	notComplete: "ä_Not complete_____Ü",
    	other: "ä_Other___Ü",
    	present: "ä_Present___Ü",
    	unknown: "ä_Unknown___Ü",
    	unpublishedMaterial: "ä_Unpublished material_______Ü"
    },
    
    hints: {
    	integerGreaterThanOne: "ä_(enter an integer > 1)________Ü",
    	integer0To100: "ä_(enter an integer 0..100)_________Ü"
    },
    
    citeinfo: {
    	caption: "ä_Citation Information_______Ü",
    	origin: "ä_Originator____Ü",
    	pubdate: "ä_Publication Date______Ü",
    	pubtime: "ä_Publication Time______Ü",
    	title: "ä_Title___Ü",
    	edition: "ä_Edition___Ü",
    	geoform: {
    		caption: "ä_Geospatial Data Presentation Form___________Ü",
    		atlas: "ä_Atlas___Ü",
    		audio: "ä_Audio___Ü",
    		diagram: "ä_Diagram___Ü",
    		sDocument: "ä_Document___Ü",
    		globe: "ä_Globe___Ü",
    		map: "ä_Map__Ü",
    		model: "ä_Model___Ü",
    		multiMediaPresentation: "ä_Multimedia presentation________Ü",
    		profile: "ä_Profile___Ü",
    		rasterDigitalData: "ä_Raster digital data_______Ü",
    		remoteSensingImage: "ä_Remote-sensing image_______Ü",
    		section: "ä_Section___Ü",
    		spreadsheet: "ä_Spreadsheet____Ü",
    		tabularDigitalData: "ä_Tabular digital data_______Ü",
    		vectorDigitalData: "ä_Vector digital data_______Ü",
    		video: "ä_Video___Ü",
    		view: "ä_View__Ü"
    	},
    	serinfo: {
    		caption: "ä_Series Information______Ü",
    		sername: "ä_Series Name____Ü",
    		issue: "ä_Issue Identification_______Ü"
    	},
    	pubinfo: {
    		caption: "ä_Publication Information________Ü",
    		pubplace: "ä_Publication Place______Ü",
    		publish: "ä_Publisher____Ü"
    	},
    	othercit: "ä_Other Citation Details________Ü",
    	onlink: "ä_Online Linkage (URL)_______Ü"
    },
    
    cntinfo: {
    	caption: "ä_Contact Information_______Ü",
    	section: {
    		primary: "ä_Primary___Ü",
    		phoneAndEmail: "ä_Phone and E-Mail______Ü",
    		hoursAndInstructions: "ä_Hours and Instructions________Ü"
    	},
    	cntorgp: {
    		caption: "ä_By organization______Ü",
    		cntorg: "ä_Organization_____Ü",
    		cntper: "ä_Person___Ü"
    	},
    	cntperp: {
    		caption: "ä_By person____Ü",
    		cntper: "ä_Person___Ü",
    		cntorg: "ä_Organization_____Ü"
    	},
    	cntpos: "ä_Position___Ü",
    	cntaddr: {
    		caption: "ä_Address___Ü",
    		addrtype: {
    			caption: "ä_Address Type_____Ü",
    			mailing: "ä_Mailing___Ü",
    			physical: "ä_Physical___Ü",
    			mailingAndPhysical: "ä_Mailing and Physical_______Ü"
    		},
    		address: "ä_Address___Ü",
    		city: "ä_City__Ü",
    		state: "ä_State___Ü",
    		postal: "ä_Postal Code____Ü",
    		country: "ä_Country___Ü"
    	},
    	cntvoice: "ä_Voice___Ü",
    	cnttdd: "ä_TDD/TTY Telephone (hearing impaired)____________Ü",
    	cntfax: "ä_Fax__Ü",
    	cntemail: "ä_E-Mail Address_____Ü",
    	hours: "ä_Hours___Ü",
    	cntinst: "ä_Instructions_____Ü"
    },
    
    dataqual: {
    	caption: "ä_Data Quality Information________Ü",
    	section: {
    		attributeAccuracy: "ä_Attribute Accuracy______Ü",
    		logicalConsistency: "ä_Logical Consistency_______Ü",
    		completeness: "ä_Completeness_____Ü",
    		positionalAccuracy: "ä_Positional Accuracy_______Ü",
    		lineage: "ä_Lineage___Ü",
    		cloudCover: "ä_Cloud Cover____Ü"
    	},
    	attracc: {
    		caption: "ä_Attribute Accuracy______Ü",
    		attraccr: "ä_Attribute Accuracy Report_________Ü",
    		qattracc: {
    			caption: "ä_Quantitative Attribute Accuracy Assessment______________Ü",
    			attraccv: "ä_Attribute Accuracy Value________Ü",
    			attracce: "ä_Attribute Accuracy Explanation__________Ü"
    		}
    	},
    	logic: "ä_Logical Consistency Report_________Ü",
    	complete: "ä_Completeness Report_______Ü",
    	posacc: "ä_Positional Accuracy_______Ü",
    	horizpa: {
    		caption: "ä_Horizontal Positional Accuracy__________Ü",
    		horizpar: "ä_Horizontal Positional Accuracy Report____________Ü",
    		qhorizpa: {
    			caption: "ä_Quantitative Horizontal Positional Accuracy Assessment_________________Ü",
    			horizpav: "ä_Horizontal Positional Accuracy Value____________Ü",
    			horizpae: "ä_Horizontal Positional Accuracy Explanation______________Ü"
    		}
    	},
    	vertacc: {
    		caption: "ä_Vertical Positional Accuracy_________Ü",
    		vertaccr: "ä_Vertical Positional Accuracy Report____________Ü",
    		qvertpa: {
    			caption: "ä_Quantitative Vertical Positional Accuracy Assessment_________________Ü",
    			vertaccv: "ä_Vertical Positional Accuracy Value___________Ü",
    			vertacce: "ä_Vertical Positional Accuracy Explanation_____________Ü"
    		}
    	},
    	lineage: {
    		caption: "ä_Lineage___Ü"
    	},
    	srcinfo: {
    		caption: "ä_Source Information______Ü",
    		srccite: "ä_Source Citation______Ü",
    		srcscale: "ä_Source Scale Denominator________Ü",
    		typesrc: {
    			caption: "ä_Type of Source Media_______Ü",
    			paper: "ä_Paper___Ü",
    			stableBaseMaterial: "ä_Stable-base material_______Ü",
    			microfiche: "ä_Microfiche____Ü",
    			microfilm: "ä_Microfilm____Ü",
    			audiocassette: "ä_Audio cassette_____Ü",
    			chart: "ä_Chart___Ü",
    			filmstrip: "ä_Film strip____Ü",
    			transparency: "ä_Transparency_____Ü",
    			videocassette: "ä_Video cassette_____Ü",
    			videodisc: "ä_Video disc____Ü",
    			videotape: "ä_Video tape____Ü",
    			physicalModel: "ä_Physical model_____Ü",
    			computerProgram: "ä_Computer program______Ü",
    			disc: "ä_Disc__Ü",
    			cartridgeTape: "ä_Cartridge tape_____Ü",
    			magneticTape: "ä_Magnetic tape_____Ü",
    			online: "ä_Online___Ü",
    			cdrom: "ä_CD-ROM___Ü",
    			electronicBulletinBoard: "ä_Electronic bulletin board_________Ü",
    			electronicMailSystem: "ä_Electronic mail system________Ü"
    		},
    		srctime: "ä_Source Time Period of Content__________Ü",
    		srccurr: "ä_Source Currentness Reference_________Ü",
    		srccitea: "ä_Source Citation Abbreviation_________Ü",
    		srccontr: "ä_Source Contribution_______Ü"
    	},
    	procstep: {
    		caption: "ä_Process Step_____Ü",
    		procdesc: "ä_Process Description_______Ü",
    		srcused: "ä_Source Used Citation Abbreviation___________Ü",
    		procdate: "ä_Process Date_____Ü",
    		proctime: "ä_Process Time_____Ü",
    		srcprod: "ä_Source Produced Citation Abbreviation____________Ü",
    		proccont: "ä_Process Contact______Ü"
    	},
    	cloud: "ä_Cloud Cover____Ü"
    },
    
    distinfo: {
    	caption: "ä_Distribution Information________Ü",
    	section: {
    		distributor: "ä_Distributor____Ü",
    		description: "ä_Description____Ü",
    		orderProcess: "ä_Order Process_____Ü",
    		prerequisites: "ä_Prerequisites_____Ü",
    		availability: "ä_Availability_____Ü"
    	},
    	distrib: "ä_Distributor____Ü",
    	resdesc: {
    		caption: "ä_Resource Description_______Ü",
    		liveData: "ä_Live Data and Maps______Ü",
    		downloadableData: "ä_Downloadable Data______Ü",
    		offlineData: "ä_Offline Data_____Ü",
    		staticMapImages: "ä_Static Map Images______Ü",
    		sDocument: "ä_Other Documents______Ü",
    		application: "ä_Applications_____Ü",
    		geographicService: "ä_Geographic Services_______Ü",
    		clearingHouse: "ä_Clearinghouses_____Ü",
    		mapFiles: "ä_Map Files____Ü",
    		geographicActivies: "ä_Geographic Activities_______Ü"
    	},
    	distliab: "ä_Distribution Liability Statement___________Ü",
    	custom: "ä_Custom Order Process_______Ü",
    	techpreq: "ä_Technical Prerequisites________Ü",
    	availabl: "ä_Availability_____Ü"
    },
    
    eainfo: {
    	caption: "ä_Entity and Attribute Information___________Ü",
    	overview: "ä_Overview Description_______Ü",
    	eaover: "ä_Entity and Attribute Overview__________Ü",
    	eadetcit: "ä_Entity and Attribute Detail Citation____________Ü"
    },
    
    idinfo: {
    	caption: "ä_Identification Information_________Ü",
    	section: {
    		timeAndStatus: "ä_Time and Status______Ü",
    		constraints: "ä_Constraints____Ü",
    		contact: "ä_Contact___Ü",
    		additional: "ä_Additional____Ü"
    	},
    	citeinfo: "ä_Citation___Ü",
    	descript: {
    		caption: "ä_Description____Ü",
    		sAbstract: "ä_Abstract___Ü",
    		purpose: "ä_Purpose___Ü",
    		supplinf: "ä_Supplemental Information________Ü"
    	},
    	timeperd: {
    		caption: "ä_Time Period of Content________Ü",
    		current: {
    			caption: "ä_Currentness Reference_______Ü",
    			groundCondition: "ä_Ground Condition______Ü",
    			publicationDate: "ä_Publication Date______Ü"
    		}
    	},
    	status: {
    		caption: "ä_Status___Ü",
    		progress: {
    			caption: "ä_Progress___Ü",
     			complete: "ä_Complete___Ü",
    			inWork: "ä_In work___Ü",
    			planned: "ä_Planned___Ü"
    		},
    		update: {
    			caption: "ä_Maintenance and Update Frequency___________Ü",
    			continual: "ä_Continual____Ü",
    			daily: "ä_Daily___Ü",
    			weekly: "ä_Weekly___Ü",
    			monthly: "ä_Monthly___Ü",
    			annually: "ä_Annually___Ü",
    			unknown: "ä_Unknown___Ü",
    			asNeeded: "ä_As needed____Ü",
    			irregular: "ä_Irregular____Ü",
    			nonePlanned: "ä_None planned_____Ü"
    		}
    	},
    	spdom: {
    		caption: "ä_Extent___Ü",
    		bounding: {
    			caption: "ä_Bounding Coordinates_______Ü",
    			westbc: "ä_West Bounding Longitude________Ü",
    			eastbc: "ä_East Bounding Longitude________Ü",
    			northbc: "ä_North Bounding Latitude________Ü",
    			southbc: "ä_South Bounding Latitude________Ü"
    		}
    	},
      keywords: {
        caption: "Schlagwörter",
        theme: "Thema",
        place: "Ort",
        stratum: "Schichtungsebene",
        temporal: "Zeit",
        thesaursus: "Zugeordneter Thesaurus",
        delimited: "Schlagwörter",
        themektIsoTopicCategory: "ISO-Thema...",
        themektIsoTopicDialog: "ISO-Thema",
        placektGnis: "Informationssystem für geografische Bezeichnungen"
      },
      accconst: "Zugriffsbeschränkungen",
      useconst: "Use Constraints",
      ptcontac: "Ansprechpartner für die Ressource",
      browse: {
      	caption: "ä_Browse Graphic_____Ü",
      	browsen: "ä_Browse Graphic URL______Ü",
      	browsed: "ä_Browse Graphic File Description__________Ü",
      	browset: "ä_Browse Graphic File Type________Ü"
      },
      datacred: "Quellennachweis für Dataset",
      secinfo: {
      	caption: "ä_Security Information_______Ü",
      	secsys: "ä_Security Classification System__________Ü",
      	secclass: {
      		caption: "ä_Security Classification________Ü",
      		topSecret: "ä_Top secret____Ü",
      		secret: "ä_Secret___Ü",
      		confidential: "ä_Confidential_____Ü",
      		restricted: "ä_Restricted____Ü",
      		unclassified: "ä_Unclassified_____Ü",
      		sensitive: "ä_Sensitive____Ü"
      	},
      	sechandl: "ä_Security Handling Description__________Ü"
      },
      sNative: "Native Dataset-Umgebung",
      crossref: "Querverweis"
    },
    
    metadata: {
    	idinfo: "ä_Identification_____Ü",
    	dataqual: "ä_Quality___Ü",
    	spdoinfo: "ä_Spatial Data Organization_________Ü",
    	spref: "ä_Spatial Reference______Ü",
    	eainfo: "ä_Entity and Attribute_______Ü",
    	distinfo: "ä_Distribution_____Ü",
    	metainfo: "ä_Metadata___Ü"
    },
    
    metainfo: {
    	caption: "ä_Metadata Information_______Ü",
    	section: {
    		dates: "ä_Metadata Dates_____Ü",
    		contact: "ä_Metadata Contact______Ü",
    		standard: "ä_Metadata Standard______Ü",
    		additional: "ä_Additional____Ü"
    	},
      metd: "Metadatendatum",
      metrd: "Datum der Metadatenprüfung",
      metfrd: "Zukünftiges Prüfungsdatum für Metadaten",
      metstdn: "Name des Metadatenstandards",
      metstdv: "Version des Metadatenstandards",
      metac: "Zugriffsbeschränkungen für Metadaten",
      metuc: "Nutzungsbeschränkungen für Metadaten",
      metsi: {
      	caption: "ä_Metadata Security Information__________Ü",
      	metscs: "ä_Metadata Security Classification System_____________Ü",
      	metsc: "ä_Metadata Security Classification___________Ü",
      	metshd: "ä_Metadata Security Handling Description____________Ü"
      }
    },
    
    spref: {
    	caption: "ä_Spatial Reference Information__________Ü",
    	horizsys: {
    		caption: "ä_Horizontal Coordinate System_________Ü",
    		geograph: {
    			caption: "ä_Geographic____Ü",
    			latres: "ä_Latitude Resolution_______Ü",
    			longres: "ä_Longitude Resolution_______Ü",
    			geogunit: {
    				caption: "ä_Geographic Coordinate Units_________Ü",
    				decimalDegrees: "ä_Decimal degrees______Ü",
    				decimalMinutes: "ä_Decimal minutes______Ü",
    				decimalSeconds: "ä_Decimal seconds______Ü",
    				degreesAndDecimalMinutes: "ä_Degrees and decimal minutes_________Ü",
    				degreesMinutesAndDecimalSeconds: "ä_Degrees, minutes, and decimal seconds____________Ü",
    				radians: "ä_Radians___Ü",
    				grads: "ä_Grads___Ü"
    			}
    		},
    		planar: {
    			caption: "ä_Planar___Ü"
    		},
    		local: {
    			caption: "ä_Local___Ü",
    			localdes: "ä_Local Description______Ü",
    			localgeo: "ä_Local Georeference Information__________Ü"
    		},
    		geodetic: {
    			caption: "ä_Geodetic Model_____Ü",
    			horizdn: {
    				caption: "ä_Horizontal Datum Name_______Ü",
    				nad83: "ä_North American Datum of 1983_________Ü",
    				nad27: "ä_North American Datum of 1927_________Ü"
    			},
    			ellips: {
    				caption: "ä_Ellipsoid Name_____Ü",
    				grs80: "ä_Geodetic Reference System 80_________Ü",
    				clarke1866: "ä_Clarke 1866____Ü"
    			},
    			semiaxis: "ä_Semi-major Axis______Ü",
    			denflat: "ä_Denominator of Flattening Ratio__________Ü"
    		}
    	},
    	vertdef: {
    		caption: "ä_Vertical Coordinate System_________Ü",
    		altsys: {
    			caption: "ä_Altitude System______Ü",
    			altdatum: {
    				caption: "ä_Altitude Datum Name_______Ü",
    				navd88: "ä_North American Vertical Datum of 1988____________Ü",
    				ngvd29: "ä_National Geodetic Vertical Datum of 1929_____________Ü"
    			},
    			altres: "ä_Altitude Resolution_______Ü",
    			altunits: {
    				caption: "ä_Altitude Distance Units________Ü",
    				meters: "ä_Meters___Ü",
    				feet: "ä_Feet__Ü"
    			},
    			altenc: {
    				caption: "ä_Altitude Encoding Method________Ü",
    				explicit: "ä_Explicit elevation coordinate included with horizontal coordinates_____________________Ü",
    				implicit: "ä_Implicit coordinate_______Ü",
    				attribute: "ä_Attribute values______Ü"
    			}
    		},
    		depthsys: {
    			caption: "ä_Depth System_____Ü",
    			depthdn: {
    				caption: "ä_Depth Datum Name______Ü",
    				option1: "ä_Local surface_____Ü", 
    				option2: "ä_Chart datum; datum for sounding reduction_____________Ü", 
    				option3: "ä_Lowest astronomical tide________Ü", 
    				option4: "ä_Highest astronomical tide_________Ü", 
    				option5: "ä_Mean low water_____Ü", 
    				option6: "ä_Mean high water______Ü", 
    				option7: "ä_Mean sea level_____Ü", 
    				option8: "ä_Land survey datum______Ü", 
    				option9: "ä_Mean low water springs________Ü", 
    				option10: "ä_Mean high water springs________Ü", 
    				option11: "ä_Mean low water neap_______Ü", 
    				option12: "ä_Mean high water neap_______Ü", 
    				option13: "ä_Mean lower low water_______Ü", 
    				option14: "ä_Mean lower low water springs_________Ü", 
    				option15: "ä_Mean higher high water________Ü", 
    				option16: "ä_Mean higher low water_______Ü", 
    				option17: "ä_Mean lower high water_______Ü", 
    				option18: "ä_Spring tide____Ü", 
    				option19: "ä_Tropic lower low water________Ü", 
    				option20: "ä_Neap tide____Ü", 
    				option21: "ä_High water____Ü", 
    				option22: "ä_Higher high water______Ü", 
    				option23: "ä_Low water____Ü", 
    				option24: "ä_Low-water datum______Ü", 
    				option25: "ä_Lowest low water______Ü", 
    				option26: "ä_Lower low water______Ü", 
    				option27: "ä_Lowest normal low water________Ü", 
    				option28: "ä_Mean tide level______Ü", 
    				option29: "ä_Indian spring low water________Ü", 
    				option30: "ä_High-water full and charge_________Ü", 
    				option31: "ä_Low-water full and charge_________Ü", 
    				option32: "ä_Columbia River datum_______Ü", 
    				option33: "ä_Gulf Coast low water datum_________Ü", 
    				option34: "ä_Equatorial springs low water_________Ü", 
    				option35: "ä_Approximate lowest astronomical tide____________Ü", 
    				option36: "ä_No correction_____Ü"
    			},
    			depthres: "ä_Depth Resolution______Ü",
    			depthdu: {
    				caption: "ä_Depth Distance Units_______Ü",
    				meters: "ä_Meters___Ü",
    				feet: "ä_Feet__Ü"
    			},   			
    			depthem: {
    				caption: "ä_Depth Encoding Method_______Ü",
    				explicit: "ä_Explicit depth coordinate included with horizontal coordinates____________________Ü",
    				implicit: "ä_Implicit coordinate_______Ü",
    				attribute: "ä_Attribute values______Ü"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "ä_Time Period Information________Ü",
    	sngdate: "ä_Single Date____Ü",
    	mdattim: "ä_Multiple Dates_____Ü",
    	rngdates: "ä_Date Range____Ü",
    	caldate: "ä_Date__Ü",
    	time: "ä_Time__Ü",
    	begdate: "ä_Beginning Date_____Ü",
    	begtime: "ä_Beginning Time_____Ü",
    	enddate: "ä_Ending Date____Ü",
    	endtime: "ä_Ending Time____Ü"
    }
   
  })
);
