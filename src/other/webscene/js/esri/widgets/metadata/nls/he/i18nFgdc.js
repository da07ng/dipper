define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "כן_FGDC__ש",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "כן_None__ש",
    	notComplete: "כן_Not complete_____ש",
    	other: "כן_Other___ש",
    	present: "כן_Present___ש",
    	unknown: "כן_Unknown___ש",
    	unpublishedMaterial: "כן_Unpublished material_______ש"
    },
    
    hints: {
    	integerGreaterThanOne: "כן_(enter an integer > 1)________ש",
    	integer0To100: "כן_(enter an integer 0..100)_________ש"
    },
    
    citeinfo: {
    	caption: "כן_Citation Information_______ש",
    	origin: "כן_Originator____ש",
    	pubdate: "כן_Publication Date______ש",
    	pubtime: "כן_Publication Time______ש",
    	title: "כן_Title___ש",
    	edition: "כן_Edition___ש",
    	geoform: {
    		caption: "כן_Geospatial Data Presentation Form___________ש",
    		atlas: "כן_Atlas___ש",
    		audio: "כן_Audio___ש",
    		diagram: "כן_Diagram___ש",
    		sDocument: "כן_Document___ש",
    		globe: "כן_Globe___ש",
    		map: "כן_Map__ש",
    		model: "כן_Model___ש",
    		multiMediaPresentation: "כן_Multimedia presentation________ש",
    		profile: "כן_Profile___ש",
    		rasterDigitalData: "כן_Raster digital data_______ש",
    		remoteSensingImage: "כן_Remote-sensing image_______ש",
    		section: "כן_Section___ש",
    		spreadsheet: "כן_Spreadsheet____ש",
    		tabularDigitalData: "כן_Tabular digital data_______ש",
    		vectorDigitalData: "כן_Vector digital data_______ש",
    		video: "כן_Video___ש",
    		view: "כן_View__ש"
    	},
    	serinfo: {
    		caption: "כן_Series Information______ש",
    		sername: "כן_Series Name____ש",
    		issue: "כן_Issue Identification_______ש"
    	},
    	pubinfo: {
    		caption: "כן_Publication Information________ש",
    		pubplace: "כן_Publication Place______ש",
    		publish: "כן_Publisher____ש"
    	},
    	othercit: "כן_Other Citation Details________ש",
    	onlink: "כן_Online Linkage (URL)_______ש"
    },
    
    cntinfo: {
    	caption: "כן_Contact Information_______ש",
    	section: {
    		primary: "כן_Primary___ש",
    		phoneAndEmail: "כן_Phone and E-Mail______ש",
    		hoursAndInstructions: "כן_Hours and Instructions________ש"
    	},
    	cntorgp: {
    		caption: "כן_By organization______ש",
    		cntorg: "כן_Organization_____ש",
    		cntper: "כן_Person___ש"
    	},
    	cntperp: {
    		caption: "כן_By person____ש",
    		cntper: "כן_Person___ש",
    		cntorg: "כן_Organization_____ש"
    	},
    	cntpos: "כן_Position___ש",
    	cntaddr: {
    		caption: "כן_Address___ש",
    		addrtype: {
    			caption: "כן_Address Type_____ש",
    			mailing: "כן_Mailing___ש",
    			physical: "כן_Physical___ש",
    			mailingAndPhysical: "כן_Mailing and Physical_______ש"
    		},
    		address: "כן_Address___ש",
    		city: "כן_City__ש",
    		state: "כן_State___ש",
    		postal: "כן_Postal Code____ש",
    		country: "כן_Country___ש"
    	},
    	cntvoice: "כן_Voice___ש",
    	cnttdd: "כן_TDD/TTY Telephone (hearing impaired)____________ש",
    	cntfax: "כן_Fax__ש",
    	cntemail: "כן_E-Mail Address_____ש",
    	hours: "כן_Hours___ש",
    	cntinst: "כן_Instructions_____ש"
    },
    
    dataqual: {
    	caption: "כן_Data Quality Information________ש",
    	section: {
    		attributeAccuracy: "כן_Attribute Accuracy______ש",
    		logicalConsistency: "כן_Logical Consistency_______ש",
    		completeness: "כן_Completeness_____ש",
    		positionalAccuracy: "כן_Positional Accuracy_______ש",
    		lineage: "כן_Lineage___ש",
    		cloudCover: "כן_Cloud Cover____ש"
    	},
    	attracc: {
    		caption: "כן_Attribute Accuracy______ש",
    		attraccr: "כן_Attribute Accuracy Report_________ש",
    		qattracc: {
    			caption: "כן_Quantitative Attribute Accuracy Assessment______________ש",
    			attraccv: "כן_Attribute Accuracy Value________ש",
    			attracce: "כן_Attribute Accuracy Explanation__________ש"
    		}
    	},
    	logic: "כן_Logical Consistency Report_________ש",
    	complete: "כן_Completeness Report_______ש",
    	posacc: "כן_Positional Accuracy_______ש",
    	horizpa: {
    		caption: "כן_Horizontal Positional Accuracy__________ש",
    		horizpar: "כן_Horizontal Positional Accuracy Report____________ש",
    		qhorizpa: {
    			caption: "כן_Quantitative Horizontal Positional Accuracy Assessment_________________ש",
    			horizpav: "כן_Horizontal Positional Accuracy Value____________ש",
    			horizpae: "כן_Horizontal Positional Accuracy Explanation______________ש"
    		}
    	},
    	vertacc: {
    		caption: "כן_Vertical Positional Accuracy_________ש",
    		vertaccr: "כן_Vertical Positional Accuracy Report____________ש",
    		qvertpa: {
    			caption: "כן_Quantitative Vertical Positional Accuracy Assessment_________________ש",
    			vertaccv: "כן_Vertical Positional Accuracy Value___________ש",
    			vertacce: "כן_Vertical Positional Accuracy Explanation_____________ש"
    		}
    	},
    	lineage: {
    		caption: "כן_Lineage___ש"
    	},
    	srcinfo: {
    		caption: "כן_Source Information______ש",
    		srccite: "כן_Source Citation______ש",
    		srcscale: "כן_Source Scale Denominator________ש",
    		typesrc: {
    			caption: "כן_Type of Source Media_______ש",
    			paper: "כן_Paper___ש",
    			stableBaseMaterial: "כן_Stable-base material_______ש",
    			microfiche: "כן_Microfiche____ש",
    			microfilm: "כן_Microfilm____ש",
    			audiocassette: "כן_Audio cassette_____ש",
    			chart: "כן_Chart___ש",
    			filmstrip: "כן_Film strip____ש",
    			transparency: "כן_Transparency_____ש",
    			videocassette: "כן_Video cassette_____ש",
    			videodisc: "כן_Video disc____ש",
    			videotape: "כן_Video tape____ש",
    			physicalModel: "כן_Physical model_____ש",
    			computerProgram: "כן_Computer program______ש",
    			disc: "כן_Disc__ש",
    			cartridgeTape: "כן_Cartridge tape_____ש",
    			magneticTape: "כן_Magnetic tape_____ש",
    			online: "כן_Online___ש",
    			cdrom: "כן_CD-ROM___ש",
    			electronicBulletinBoard: "כן_Electronic bulletin board_________ש",
    			electronicMailSystem: "כן_Electronic mail system________ש"
    		},
    		srctime: "כן_Source Time Period of Content__________ש",
    		srccurr: "כן_Source Currentness Reference_________ש",
    		srccitea: "כן_Source Citation Abbreviation_________ש",
    		srccontr: "כן_Source Contribution_______ש"
    	},
    	procstep: {
    		caption: "כן_Process Step_____ש",
    		procdesc: "כן_Process Description_______ש",
    		srcused: "כן_Source Used Citation Abbreviation___________ש",
    		procdate: "כן_Process Date_____ש",
    		proctime: "כן_Process Time_____ש",
    		srcprod: "כן_Source Produced Citation Abbreviation____________ש",
    		proccont: "כן_Process Contact______ש"
    	},
    	cloud: "כן_Cloud Cover____ש"
    },
    
    distinfo: {
    	caption: "כן_Distribution Information________ש",
    	section: {
    		distributor: "כן_Distributor____ש",
    		description: "כן_Description____ש",
    		orderProcess: "כן_Order Process_____ש",
    		prerequisites: "כן_Prerequisites_____ש",
    		availability: "כן_Availability_____ש"
    	},
    	distrib: "כן_Distributor____ש",
    	resdesc: {
    		caption: "כן_Resource Description_______ש",
    		liveData: "כן_Live Data and Maps______ש",
    		downloadableData: "כן_Downloadable Data______ש",
    		offlineData: "כן_Offline Data_____ש",
    		staticMapImages: "כן_Static Map Images______ש",
    		sDocument: "כן_Other Documents______ש",
    		application: "כן_Applications_____ש",
    		geographicService: "כן_Geographic Services_______ש",
    		clearingHouse: "כן_Clearinghouses_____ש",
    		mapFiles: "כן_Map Files____ש",
    		geographicActivies: "כן_Geographic Activities_______ש"
    	},
    	distliab: "כן_Distribution Liability Statement___________ש",
    	custom: "כן_Custom Order Process_______ש",
    	techpreq: "כן_Technical Prerequisites________ש",
    	availabl: "כן_Availability_____ש"
    },
    
    eainfo: {
    	caption: "כן_Entity and Attribute Information___________ש",
    	overview: "כן_Overview Description_______ש",
    	eaover: "כן_Entity and Attribute Overview__________ש",
    	eadetcit: "כן_Entity and Attribute Detail Citation____________ש"
    },
    
    idinfo: {
    	caption: "כן_Identification Information_________ש",
    	section: {
    		timeAndStatus: "כן_Time and Status______ש",
    		constraints: "כן_Constraints____ש",
    		contact: "כן_Contact___ש",
    		additional: "כן_Additional____ש"
    	},
    	citeinfo: "כן_Citation___ש",
    	descript: {
    		caption: "כן_Description____ש",
    		sAbstract: "כן_Abstract___ש",
    		purpose: "כן_Purpose___ש",
    		supplinf: "כן_Supplemental Information________ש"
    	},
    	timeperd: {
    		caption: "כן_Time Period of Content________ש",
    		current: {
    			caption: "כן_Currentness Reference_______ש",
    			groundCondition: "כן_Ground Condition______ש",
    			publicationDate: "כן_Publication Date______ש"
    		}
    	},
    	status: {
    		caption: "כן_Status___ש",
    		progress: {
    			caption: "כן_Progress___ש",
     			complete: "כן_Complete___ש",
    			inWork: "כן_In work___ש",
    			planned: "כן_Planned___ש"
    		},
    		update: {
    			caption: "כן_Maintenance and Update Frequency___________ש",
    			continual: "כן_Continual____ש",
    			daily: "כן_Daily___ש",
    			weekly: "כן_Weekly___ש",
    			monthly: "כן_Monthly___ש",
    			annually: "כן_Annually___ש",
    			unknown: "כן_Unknown___ש",
    			asNeeded: "כן_As needed____ש",
    			irregular: "כן_Irregular____ש",
    			nonePlanned: "כן_None planned_____ש"
    		}
    	},
    	spdom: {
    		caption: "כן_Extent___ש",
    		bounding: {
    			caption: "כן_Bounding Coordinates_______ש",
    			westbc: "כן_West Bounding Longitude________ש",
    			eastbc: "כן_East Bounding Longitude________ש",
    			northbc: "כן_North Bounding Latitude________ש",
    			southbc: "כן_South Bounding Latitude________ש"
    		}
    	},
      keywords: {
        caption: "מילות מפתח",
        theme: "נושא",
        place: "מקום",
        stratum: "Stratum",
        temporal: "Temporal",
        thesaursus: "אוצר מילים משויך",
        delimited: "מילות מפתח",
        themektIsoTopicCategory: "נושא ISO...",
        themektIsoTopicDialog: "נושא ISO",
        placektGnis: "מערכת מידע של שמות גיאוגרפיים"
      },
      accconst: "מגבלות גישה",
      useconst: "השתמש באילוצים",
      ptcontac: "נקודת קשר של המשאב",
      browse: {
      	caption: "כן_Browse Graphic_____ש",
      	browsen: "כן_Browse Graphic URL______ש",
      	browsed: "כן_Browse Graphic File Description__________ש",
      	browset: "כן_Browse Graphic File Type________ש"
      },
      datacred: "קרדיט סט נתונים",
      secinfo: {
      	caption: "כן_Security Information_______ש",
      	secsys: "כן_Security Classification System__________ש",
      	secclass: {
      		caption: "כן_Security Classification________ש",
      		topSecret: "כן_Top secret____ש",
      		secret: "כן_Secret___ש",
      		confidential: "כן_Confidential_____ש",
      		restricted: "כן_Restricted____ש",
      		unclassified: "כן_Unclassified_____ש",
      		sensitive: "כן_Sensitive____ש"
      	},
      	sechandl: "כן_Security Handling Description__________ש"
      },
      sNative: "סביבת סט נתונים מקומית",
      crossref: "תיאום אזכורים"
    },
    
    metadata: {
    	idinfo: "כן_Identification_____ש",
    	dataqual: "כן_Quality___ש",
    	spdoinfo: "כן_Spatial Data Organization_________ש",
    	spref: "כן_Spatial Reference______ש",
    	eainfo: "כן_Entity and Attribute_______ש",
    	distinfo: "כן_Distribution_____ש",
    	metainfo: "כן_Metadata___ש"
    },
    
    metainfo: {
    	caption: "כן_Metadata Information_______ש",
    	section: {
    		dates: "כן_Metadata Dates_____ש",
    		contact: "כן_Metadata Contact______ש",
    		standard: "כן_Metadata Standard______ש",
    		additional: "כן_Additional____ש"
    	},
      metd: "תאריך מטה-דאטה",
      metrd: "תאריך סקירת מטה-דאטה",
      metfrd: "תאריך ביקורת עתידית של המטה-דאטה",
      metstdn: "שם מטה-דאטה סטנדרטי",
      metstdv: "גרסה סטנדרטית של מטה-דאטה",
      metac: "מגבלות גישה למטה-דאטה",
      metuc: "מגבלות שימוש במטה-דאטה",
      metsi: {
      	caption: "כן_Metadata Security Information__________ש",
      	metscs: "כן_Metadata Security Classification System_____________ש",
      	metsc: "כן_Metadata Security Classification___________ש",
      	metshd: "כן_Metadata Security Handling Description____________ש"
      }
    },
    
    spref: {
    	caption: "כן_Spatial Reference Information__________ש",
    	horizsys: {
    		caption: "כן_Horizontal Coordinate System_________ש",
    		geograph: {
    			caption: "כן_Geographic____ש",
    			latres: "כן_Latitude Resolution_______ש",
    			longres: "כן_Longitude Resolution_______ש",
    			geogunit: {
    				caption: "כן_Geographic Coordinate Units_________ש",
    				decimalDegrees: "כן_Decimal degrees______ש",
    				decimalMinutes: "כן_Decimal minutes______ש",
    				decimalSeconds: "כן_Decimal seconds______ש",
    				degreesAndDecimalMinutes: "כן_Degrees and decimal minutes_________ש",
    				degreesMinutesAndDecimalSeconds: "כן_Degrees, minutes, and decimal seconds____________ש",
    				radians: "כן_Radians___ש",
    				grads: "כן_Grads___ש"
    			}
    		},
    		planar: {
    			caption: "כן_Planar___ש"
    		},
    		local: {
    			caption: "כן_Local___ש",
    			localdes: "כן_Local Description______ש",
    			localgeo: "כן_Local Georeference Information__________ש"
    		},
    		geodetic: {
    			caption: "כן_Geodetic Model_____ש",
    			horizdn: {
    				caption: "כן_Horizontal Datum Name_______ש",
    				nad83: "כן_North American Datum of 1983_________ש",
    				nad27: "כן_North American Datum of 1927_________ש"
    			},
    			ellips: {
    				caption: "כן_Ellipsoid Name_____ש",
    				grs80: "כן_Geodetic Reference System 80_________ש",
    				clarke1866: "כן_Clarke 1866____ש"
    			},
    			semiaxis: "כן_Semi-major Axis______ש",
    			denflat: "כן_Denominator of Flattening Ratio__________ש"
    		}
    	},
    	vertdef: {
    		caption: "כן_Vertical Coordinate System_________ש",
    		altsys: {
    			caption: "כן_Altitude System______ש",
    			altdatum: {
    				caption: "כן_Altitude Datum Name_______ש",
    				navd88: "כן_North American Vertical Datum of 1988____________ש",
    				ngvd29: "כן_National Geodetic Vertical Datum of 1929_____________ש"
    			},
    			altres: "כן_Altitude Resolution_______ש",
    			altunits: {
    				caption: "כן_Altitude Distance Units________ש",
    				meters: "כן_Meters___ש",
    				feet: "כן_Feet__ש"
    			},
    			altenc: {
    				caption: "כן_Altitude Encoding Method________ש",
    				explicit: "כן_Explicit elevation coordinate included with horizontal coordinates_____________________ש",
    				implicit: "כן_Implicit coordinate_______ש",
    				attribute: "כן_Attribute values______ש"
    			}
    		},
    		depthsys: {
    			caption: "כן_Depth System_____ש",
    			depthdn: {
    				caption: "כן_Depth Datum Name______ש",
    				option1: "כן_Local surface_____ש", 
    				option2: "כן_Chart datum; datum for sounding reduction_____________ש", 
    				option3: "כן_Lowest astronomical tide________ש", 
    				option4: "כן_Highest astronomical tide_________ש", 
    				option5: "כן_Mean low water_____ש", 
    				option6: "כן_Mean high water______ש", 
    				option7: "כן_Mean sea level_____ש", 
    				option8: "כן_Land survey datum______ש", 
    				option9: "כן_Mean low water springs________ש", 
    				option10: "כן_Mean high water springs________ש", 
    				option11: "כן_Mean low water neap_______ש", 
    				option12: "כן_Mean high water neap_______ש", 
    				option13: "כן_Mean lower low water_______ש", 
    				option14: "כן_Mean lower low water springs_________ש", 
    				option15: "כן_Mean higher high water________ש", 
    				option16: "כן_Mean higher low water_______ש", 
    				option17: "כן_Mean lower high water_______ש", 
    				option18: "כן_Spring tide____ש", 
    				option19: "כן_Tropic lower low water________ש", 
    				option20: "כן_Neap tide____ש", 
    				option21: "כן_High water____ש", 
    				option22: "כן_Higher high water______ש", 
    				option23: "כן_Low water____ש", 
    				option24: "כן_Low-water datum______ש", 
    				option25: "כן_Lowest low water______ש", 
    				option26: "כן_Lower low water______ש", 
    				option27: "כן_Lowest normal low water________ש", 
    				option28: "כן_Mean tide level______ש", 
    				option29: "כן_Indian spring low water________ש", 
    				option30: "כן_High-water full and charge_________ש", 
    				option31: "כן_Low-water full and charge_________ש", 
    				option32: "כן_Columbia River datum_______ש", 
    				option33: "כן_Gulf Coast low water datum_________ש", 
    				option34: "כן_Equatorial springs low water_________ש", 
    				option35: "כן_Approximate lowest astronomical tide____________ש", 
    				option36: "כן_No correction_____ש"
    			},
    			depthres: "כן_Depth Resolution______ש",
    			depthdu: {
    				caption: "כן_Depth Distance Units_______ש",
    				meters: "כן_Meters___ש",
    				feet: "כן_Feet__ש"
    			},   			
    			depthem: {
    				caption: "כן_Depth Encoding Method_______ש",
    				explicit: "כן_Explicit depth coordinate included with horizontal coordinates____________________ש",
    				implicit: "כן_Implicit coordinate_______ש",
    				attribute: "כן_Attribute values______ש"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "כן_Time Period Information________ש",
    	sngdate: "כן_Single Date____ש",
    	mdattim: "כן_Multiple Dates_____ש",
    	rngdates: "כן_Date Range____ש",
    	caldate: "כן_Date__ש",
    	time: "כן_Time__ש",
    	begdate: "כן_Beginning Date_____ש",
    	begtime: "כן_Beginning Time_____ש",
    	enddate: "כן_Ending Date____ש",
    	endtime: "כן_Ending Time____ש"
    }
   
  })
);
