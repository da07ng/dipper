define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "π_FGDC__Ω",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "π_None__Ω",
    	notComplete: "π_Not complete_____Ω",
    	other: "π_Other___Ω",
    	present: "π_Present___Ω",
    	unknown: "π_Unknown___Ω",
    	unpublishedMaterial: "π_Unpublished material_______Ω"
    },
    
    hints: {
    	integerGreaterThanOne: "π_(enter an integer > 1)________Ω",
    	integer0To100: "π_(enter an integer 0..100)_________Ω"
    },
    
    citeinfo: {
    	caption: "π_Citation Information_______Ω",
    	origin: "π_Originator____Ω",
    	pubdate: "π_Publication Date______Ω",
    	pubtime: "π_Publication Time______Ω",
    	title: "π_Title___Ω",
    	edition: "π_Edition___Ω",
    	geoform: {
    		caption: "π_Geospatial Data Presentation Form___________Ω",
    		atlas: "π_Atlas___Ω",
    		audio: "π_Audio___Ω",
    		diagram: "π_Diagram___Ω",
    		sDocument: "π_Document___Ω",
    		globe: "π_Globe___Ω",
    		map: "π_Map__Ω",
    		model: "π_Model___Ω",
    		multiMediaPresentation: "π_Multimedia presentation________Ω",
    		profile: "π_Profile___Ω",
    		rasterDigitalData: "π_Raster digital data_______Ω",
    		remoteSensingImage: "π_Remote-sensing image_______Ω",
    		section: "π_Section___Ω",
    		spreadsheet: "π_Spreadsheet____Ω",
    		tabularDigitalData: "π_Tabular digital data_______Ω",
    		vectorDigitalData: "π_Vector digital data_______Ω",
    		video: "π_Video___Ω",
    		view: "π_View__Ω"
    	},
    	serinfo: {
    		caption: "π_Series Information______Ω",
    		sername: "π_Series Name____Ω",
    		issue: "π_Issue Identification_______Ω"
    	},
    	pubinfo: {
    		caption: "π_Publication Information________Ω",
    		pubplace: "π_Publication Place______Ω",
    		publish: "π_Publisher____Ω"
    	},
    	othercit: "π_Other Citation Details________Ω",
    	onlink: "π_Online Linkage (URL)_______Ω"
    },
    
    cntinfo: {
    	caption: "π_Contact Information_______Ω",
    	section: {
    		primary: "π_Primary___Ω",
    		phoneAndEmail: "π_Phone and E-Mail______Ω",
    		hoursAndInstructions: "π_Hours and Instructions________Ω"
    	},
    	cntorgp: {
    		caption: "π_By organization______Ω",
    		cntorg: "π_Organization_____Ω",
    		cntper: "π_Person___Ω"
    	},
    	cntperp: {
    		caption: "π_By person____Ω",
    		cntper: "π_Person___Ω",
    		cntorg: "π_Organization_____Ω"
    	},
    	cntpos: "π_Position___Ω",
    	cntaddr: {
    		caption: "π_Address___Ω",
    		addrtype: {
    			caption: "π_Address Type_____Ω",
    			mailing: "π_Mailing___Ω",
    			physical: "π_Physical___Ω",
    			mailingAndPhysical: "π_Mailing and Physical_______Ω"
    		},
    		address: "π_Address___Ω",
    		city: "π_City__Ω",
    		state: "π_State___Ω",
    		postal: "π_Postal Code____Ω",
    		country: "π_Country___Ω"
    	},
    	cntvoice: "π_Voice___Ω",
    	cnttdd: "π_TDD/TTY Telephone (hearing impaired)____________Ω",
    	cntfax: "π_Fax__Ω",
    	cntemail: "π_E-Mail Address_____Ω",
    	hours: "π_Hours___Ω",
    	cntinst: "π_Instructions_____Ω"
    },
    
    dataqual: {
    	caption: "π_Data Quality Information________Ω",
    	section: {
    		attributeAccuracy: "π_Attribute Accuracy______Ω",
    		logicalConsistency: "π_Logical Consistency_______Ω",
    		completeness: "π_Completeness_____Ω",
    		positionalAccuracy: "π_Positional Accuracy_______Ω",
    		lineage: "π_Lineage___Ω",
    		cloudCover: "π_Cloud Cover____Ω"
    	},
    	attracc: {
    		caption: "π_Attribute Accuracy______Ω",
    		attraccr: "π_Attribute Accuracy Report_________Ω",
    		qattracc: {
    			caption: "π_Quantitative Attribute Accuracy Assessment______________Ω",
    			attraccv: "π_Attribute Accuracy Value________Ω",
    			attracce: "π_Attribute Accuracy Explanation__________Ω"
    		}
    	},
    	logic: "π_Logical Consistency Report_________Ω",
    	complete: "π_Completeness Report_______Ω",
    	posacc: "π_Positional Accuracy_______Ω",
    	horizpa: {
    		caption: "π_Horizontal Positional Accuracy__________Ω",
    		horizpar: "π_Horizontal Positional Accuracy Report____________Ω",
    		qhorizpa: {
    			caption: "π_Quantitative Horizontal Positional Accuracy Assessment_________________Ω",
    			horizpav: "π_Horizontal Positional Accuracy Value____________Ω",
    			horizpae: "π_Horizontal Positional Accuracy Explanation______________Ω"
    		}
    	},
    	vertacc: {
    		caption: "π_Vertical Positional Accuracy_________Ω",
    		vertaccr: "π_Vertical Positional Accuracy Report____________Ω",
    		qvertpa: {
    			caption: "π_Quantitative Vertical Positional Accuracy Assessment_________________Ω",
    			vertaccv: "π_Vertical Positional Accuracy Value___________Ω",
    			vertacce: "π_Vertical Positional Accuracy Explanation_____________Ω"
    		}
    	},
    	lineage: {
    		caption: "π_Lineage___Ω"
    	},
    	srcinfo: {
    		caption: "π_Source Information______Ω",
    		srccite: "π_Source Citation______Ω",
    		srcscale: "π_Source Scale Denominator________Ω",
    		typesrc: {
    			caption: "π_Type of Source Media_______Ω",
    			paper: "π_Paper___Ω",
    			stableBaseMaterial: "π_Stable-base material_______Ω",
    			microfiche: "π_Microfiche____Ω",
    			microfilm: "π_Microfilm____Ω",
    			audiocassette: "π_Audio cassette_____Ω",
    			chart: "π_Chart___Ω",
    			filmstrip: "π_Film strip____Ω",
    			transparency: "π_Transparency_____Ω",
    			videocassette: "π_Video cassette_____Ω",
    			videodisc: "π_Video disc____Ω",
    			videotape: "π_Video tape____Ω",
    			physicalModel: "π_Physical model_____Ω",
    			computerProgram: "π_Computer program______Ω",
    			disc: "π_Disc__Ω",
    			cartridgeTape: "π_Cartridge tape_____Ω",
    			magneticTape: "π_Magnetic tape_____Ω",
    			online: "π_Online___Ω",
    			cdrom: "π_CD-ROM___Ω",
    			electronicBulletinBoard: "π_Electronic bulletin board_________Ω",
    			electronicMailSystem: "π_Electronic mail system________Ω"
    		},
    		srctime: "π_Source Time Period of Content__________Ω",
    		srccurr: "π_Source Currentness Reference_________Ω",
    		srccitea: "π_Source Citation Abbreviation_________Ω",
    		srccontr: "π_Source Contribution_______Ω"
    	},
    	procstep: {
    		caption: "π_Process Step_____Ω",
    		procdesc: "π_Process Description_______Ω",
    		srcused: "π_Source Used Citation Abbreviation___________Ω",
    		procdate: "π_Process Date_____Ω",
    		proctime: "π_Process Time_____Ω",
    		srcprod: "π_Source Produced Citation Abbreviation____________Ω",
    		proccont: "π_Process Contact______Ω"
    	},
    	cloud: "π_Cloud Cover____Ω"
    },
    
    distinfo: {
    	caption: "π_Distribution Information________Ω",
    	section: {
    		distributor: "π_Distributor____Ω",
    		description: "π_Description____Ω",
    		orderProcess: "π_Order Process_____Ω",
    		prerequisites: "π_Prerequisites_____Ω",
    		availability: "π_Availability_____Ω"
    	},
    	distrib: "π_Distributor____Ω",
    	resdesc: {
    		caption: "π_Resource Description_______Ω",
    		liveData: "π_Live Data and Maps______Ω",
    		downloadableData: "π_Downloadable Data______Ω",
    		offlineData: "π_Offline Data_____Ω",
    		staticMapImages: "π_Static Map Images______Ω",
    		sDocument: "π_Other Documents______Ω",
    		application: "π_Applications_____Ω",
    		geographicService: "π_Geographic Services_______Ω",
    		clearingHouse: "π_Clearinghouses_____Ω",
    		mapFiles: "π_Map Files____Ω",
    		geographicActivies: "π_Geographic Activities_______Ω"
    	},
    	distliab: "π_Distribution Liability Statement___________Ω",
    	custom: "π_Custom Order Process_______Ω",
    	techpreq: "π_Technical Prerequisites________Ω",
    	availabl: "π_Availability_____Ω"
    },
    
    eainfo: {
    	caption: "π_Entity and Attribute Information___________Ω",
    	overview: "π_Overview Description_______Ω",
    	eaover: "π_Entity and Attribute Overview__________Ω",
    	eadetcit: "π_Entity and Attribute Detail Citation____________Ω"
    },
    
    idinfo: {
    	caption: "π_Identification Information_________Ω",
    	section: {
    		timeAndStatus: "π_Time and Status______Ω",
    		constraints: "π_Constraints____Ω",
    		contact: "π_Contact___Ω",
    		additional: "π_Additional____Ω"
    	},
    	citeinfo: "π_Citation___Ω",
    	descript: {
    		caption: "π_Description____Ω",
    		sAbstract: "π_Abstract___Ω",
    		purpose: "π_Purpose___Ω",
    		supplinf: "π_Supplemental Information________Ω"
    	},
    	timeperd: {
    		caption: "π_Time Period of Content________Ω",
    		current: {
    			caption: "π_Currentness Reference_______Ω",
    			groundCondition: "π_Ground Condition______Ω",
    			publicationDate: "π_Publication Date______Ω"
    		}
    	},
    	status: {
    		caption: "π_Status___Ω",
    		progress: {
    			caption: "π_Progress___Ω",
     			complete: "π_Complete___Ω",
    			inWork: "π_In work___Ω",
    			planned: "π_Planned___Ω"
    		},
    		update: {
    			caption: "π_Maintenance and Update Frequency___________Ω",
    			continual: "π_Continual____Ω",
    			daily: "π_Daily___Ω",
    			weekly: "π_Weekly___Ω",
    			monthly: "π_Monthly___Ω",
    			annually: "π_Annually___Ω",
    			unknown: "π_Unknown___Ω",
    			asNeeded: "π_As needed____Ω",
    			irregular: "π_Irregular____Ω",
    			nonePlanned: "π_None planned_____Ω"
    		}
    	},
    	spdom: {
    		caption: "π_Extent___Ω",
    		bounding: {
    			caption: "π_Bounding Coordinates_______Ω",
    			westbc: "π_West Bounding Longitude________Ω",
    			eastbc: "π_East Bounding Longitude________Ω",
    			northbc: "π_North Bounding Latitude________Ω",
    			southbc: "π_South Bounding Latitude________Ω"
    		}
    	},
      keywords: {
        caption: "Λέξεις-κλειδιά",
        theme: "Θέμα",
        place: "Τόπος",
        stratum: "Επίπεδο",
        temporal: "Χρόνος",
        thesaursus: "Συσχετιζόμενος θησαυρός",
        delimited: "Λέξεις-κλειδιά",
        themektIsoTopicCategory: "Θέμα ISO...",
        themektIsoTopicDialog: "Θέμα ISO",
        placektGnis: "Σύστημα πληροφοριών γεωγραφικών ονομάτων"
      },
      accconst: "Περιορισμοί πρόσβασης",
      useconst: "Περιορισμοί χρήσης",
      ptcontac: "Αρμόδιος επικοινωνίας για τον πόρο",
      browse: {
      	caption: "π_Browse Graphic_____Ω",
      	browsen: "π_Browse Graphic URL______Ω",
      	browsed: "π_Browse Graphic File Description__________Ω",
      	browset: "π_Browse Graphic File Type________Ω"
      },
      datacred: "Συντελεστής συνόλου δεδομένων",
      secinfo: {
      	caption: "π_Security Information_______Ω",
      	secsys: "π_Security Classification System__________Ω",
      	secclass: {
      		caption: "π_Security Classification________Ω",
      		topSecret: "π_Top secret____Ω",
      		secret: "π_Secret___Ω",
      		confidential: "π_Confidential_____Ω",
      		restricted: "π_Restricted____Ω",
      		unclassified: "π_Unclassified_____Ω",
      		sensitive: "π_Sensitive____Ω"
      	},
      	sechandl: "π_Security Handling Description__________Ω"
      },
      sNative: "Εγγενές περιβάλλον συνόλου δεδομένων",
      crossref: "Παραπομπή"
    },
    
    metadata: {
    	idinfo: "π_Identification_____Ω",
    	dataqual: "π_Quality___Ω",
    	spdoinfo: "π_Spatial Data Organization_________Ω",
    	spref: "π_Spatial Reference______Ω",
    	eainfo: "π_Entity and Attribute_______Ω",
    	distinfo: "π_Distribution_____Ω",
    	metainfo: "π_Metadata___Ω"
    },
    
    metainfo: {
    	caption: "π_Metadata Information_______Ω",
    	section: {
    		dates: "π_Metadata Dates_____Ω",
    		contact: "π_Metadata Contact______Ω",
    		standard: "π_Metadata Standard______Ω",
    		additional: "π_Additional____Ω"
    	},
      metd: "Ημ/νία μεταδεδομένων",
      metrd: "Ημ/νία αναθεώρησης μεταδεδομένων",
      metfrd: "Ημ/νία μελλοντικής αναθεώρησης μεταδεδομένων",
      metstdn: "Τυπικό όνομα μεταδεδομένων",
      metstdv: "Τυπική έκδοση μεταδεδομένων",
      metac: "Περιορισμοί πρόσβασης σε μεταδεδομένα",
      metuc: "Περιορισμοί χρήσης μεταδεδομένων",
      metsi: {
      	caption: "π_Metadata Security Information__________Ω",
      	metscs: "π_Metadata Security Classification System_____________Ω",
      	metsc: "π_Metadata Security Classification___________Ω",
      	metshd: "π_Metadata Security Handling Description____________Ω"
      }
    },
    
    spref: {
    	caption: "π_Spatial Reference Information__________Ω",
    	horizsys: {
    		caption: "π_Horizontal Coordinate System_________Ω",
    		geograph: {
    			caption: "π_Geographic____Ω",
    			latres: "π_Latitude Resolution_______Ω",
    			longres: "π_Longitude Resolution_______Ω",
    			geogunit: {
    				caption: "π_Geographic Coordinate Units_________Ω",
    				decimalDegrees: "π_Decimal degrees______Ω",
    				decimalMinutes: "π_Decimal minutes______Ω",
    				decimalSeconds: "π_Decimal seconds______Ω",
    				degreesAndDecimalMinutes: "π_Degrees and decimal minutes_________Ω",
    				degreesMinutesAndDecimalSeconds: "π_Degrees, minutes, and decimal seconds____________Ω",
    				radians: "π_Radians___Ω",
    				grads: "π_Grads___Ω"
    			}
    		},
    		planar: {
    			caption: "π_Planar___Ω"
    		},
    		local: {
    			caption: "π_Local___Ω",
    			localdes: "π_Local Description______Ω",
    			localgeo: "π_Local Georeference Information__________Ω"
    		},
    		geodetic: {
    			caption: "π_Geodetic Model_____Ω",
    			horizdn: {
    				caption: "π_Horizontal Datum Name_______Ω",
    				nad83: "π_North American Datum of 1983_________Ω",
    				nad27: "π_North American Datum of 1927_________Ω"
    			},
    			ellips: {
    				caption: "π_Ellipsoid Name_____Ω",
    				grs80: "π_Geodetic Reference System 80_________Ω",
    				clarke1866: "π_Clarke 1866____Ω"
    			},
    			semiaxis: "π_Semi-major Axis______Ω",
    			denflat: "π_Denominator of Flattening Ratio__________Ω"
    		}
    	},
    	vertdef: {
    		caption: "π_Vertical Coordinate System_________Ω",
    		altsys: {
    			caption: "π_Altitude System______Ω",
    			altdatum: {
    				caption: "π_Altitude Datum Name_______Ω",
    				navd88: "π_North American Vertical Datum of 1988____________Ω",
    				ngvd29: "π_National Geodetic Vertical Datum of 1929_____________Ω"
    			},
    			altres: "π_Altitude Resolution_______Ω",
    			altunits: {
    				caption: "π_Altitude Distance Units________Ω",
    				meters: "π_Meters___Ω",
    				feet: "π_Feet__Ω"
    			},
    			altenc: {
    				caption: "π_Altitude Encoding Method________Ω",
    				explicit: "π_Explicit elevation coordinate included with horizontal coordinates_____________________Ω",
    				implicit: "π_Implicit coordinate_______Ω",
    				attribute: "π_Attribute values______Ω"
    			}
    		},
    		depthsys: {
    			caption: "π_Depth System_____Ω",
    			depthdn: {
    				caption: "π_Depth Datum Name______Ω",
    				option1: "π_Local surface_____Ω", 
    				option2: "π_Chart datum; datum for sounding reduction_____________Ω", 
    				option3: "π_Lowest astronomical tide________Ω", 
    				option4: "π_Highest astronomical tide_________Ω", 
    				option5: "π_Mean low water_____Ω", 
    				option6: "π_Mean high water______Ω", 
    				option7: "π_Mean sea level_____Ω", 
    				option8: "π_Land survey datum______Ω", 
    				option9: "π_Mean low water springs________Ω", 
    				option10: "π_Mean high water springs________Ω", 
    				option11: "π_Mean low water neap_______Ω", 
    				option12: "π_Mean high water neap_______Ω", 
    				option13: "π_Mean lower low water_______Ω", 
    				option14: "π_Mean lower low water springs_________Ω", 
    				option15: "π_Mean higher high water________Ω", 
    				option16: "π_Mean higher low water_______Ω", 
    				option17: "π_Mean lower high water_______Ω", 
    				option18: "π_Spring tide____Ω", 
    				option19: "π_Tropic lower low water________Ω", 
    				option20: "π_Neap tide____Ω", 
    				option21: "π_High water____Ω", 
    				option22: "π_Higher high water______Ω", 
    				option23: "π_Low water____Ω", 
    				option24: "π_Low-water datum______Ω", 
    				option25: "π_Lowest low water______Ω", 
    				option26: "π_Lower low water______Ω", 
    				option27: "π_Lowest normal low water________Ω", 
    				option28: "π_Mean tide level______Ω", 
    				option29: "π_Indian spring low water________Ω", 
    				option30: "π_High-water full and charge_________Ω", 
    				option31: "π_Low-water full and charge_________Ω", 
    				option32: "π_Columbia River datum_______Ω", 
    				option33: "π_Gulf Coast low water datum_________Ω", 
    				option34: "π_Equatorial springs low water_________Ω", 
    				option35: "π_Approximate lowest astronomical tide____________Ω", 
    				option36: "π_No correction_____Ω"
    			},
    			depthres: "π_Depth Resolution______Ω",
    			depthdu: {
    				caption: "π_Depth Distance Units_______Ω",
    				meters: "π_Meters___Ω",
    				feet: "π_Feet__Ω"
    			},   			
    			depthem: {
    				caption: "π_Depth Encoding Method_______Ω",
    				explicit: "π_Explicit depth coordinate included with horizontal coordinates____________________Ω",
    				implicit: "π_Implicit coordinate_______Ω",
    				attribute: "π_Attribute values______Ω"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "π_Time Period Information________Ω",
    	sngdate: "π_Single Date____Ω",
    	mdattim: "π_Multiple Dates_____Ω",
    	rngdates: "π_Date Range____Ω",
    	caldate: "π_Date__Ω",
    	time: "π_Time__Ω",
    	begdate: "π_Beginning Date_____Ω",
    	begtime: "π_Beginning Time_____Ω",
    	enddate: "π_Ending Date____Ω",
    	endtime: "π_Ending Time____Ω"
    }
   
  })
);
