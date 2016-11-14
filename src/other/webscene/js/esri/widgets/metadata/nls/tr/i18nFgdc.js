define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "ı_FGDC__İ",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "ı_None__İ",
    	notComplete: "ı_Not complete_____İ",
    	other: "ı_Other___İ",
    	present: "ı_Present___İ",
    	unknown: "ı_Unknown___İ",
    	unpublishedMaterial: "ı_Unpublished material_______İ"
    },
    
    hints: {
    	integerGreaterThanOne: "ı_(enter an integer > 1)________İ",
    	integer0To100: "ı_(enter an integer 0..100)_________İ"
    },
    
    citeinfo: {
    	caption: "ı_Citation Information_______İ",
    	origin: "ı_Originator____İ",
    	pubdate: "ı_Publication Date______İ",
    	pubtime: "ı_Publication Time______İ",
    	title: "ı_Title___İ",
    	edition: "ı_Edition___İ",
    	geoform: {
    		caption: "ı_Geospatial Data Presentation Form___________İ",
    		atlas: "ı_Atlas___İ",
    		audio: "ı_Audio___İ",
    		diagram: "ı_Diagram___İ",
    		sDocument: "ı_Document___İ",
    		globe: "ı_Globe___İ",
    		map: "ı_Map__İ",
    		model: "ı_Model___İ",
    		multiMediaPresentation: "ı_Multimedia presentation________İ",
    		profile: "ı_Profile___İ",
    		rasterDigitalData: "ı_Raster digital data_______İ",
    		remoteSensingImage: "ı_Remote-sensing image_______İ",
    		section: "ı_Section___İ",
    		spreadsheet: "ı_Spreadsheet____İ",
    		tabularDigitalData: "ı_Tabular digital data_______İ",
    		vectorDigitalData: "ı_Vector digital data_______İ",
    		video: "ı_Video___İ",
    		view: "ı_View__İ"
    	},
    	serinfo: {
    		caption: "ı_Series Information______İ",
    		sername: "ı_Series Name____İ",
    		issue: "ı_Issue Identification_______İ"
    	},
    	pubinfo: {
    		caption: "ı_Publication Information________İ",
    		pubplace: "ı_Publication Place______İ",
    		publish: "ı_Publisher____İ"
    	},
    	othercit: "ı_Other Citation Details________İ",
    	onlink: "ı_Online Linkage (URL)_______İ"
    },
    
    cntinfo: {
    	caption: "ı_Contact Information_______İ",
    	section: {
    		primary: "ı_Primary___İ",
    		phoneAndEmail: "ı_Phone and E-Mail______İ",
    		hoursAndInstructions: "ı_Hours and Instructions________İ"
    	},
    	cntorgp: {
    		caption: "ı_By organization______İ",
    		cntorg: "ı_Organization_____İ",
    		cntper: "ı_Person___İ"
    	},
    	cntperp: {
    		caption: "ı_By person____İ",
    		cntper: "ı_Person___İ",
    		cntorg: "ı_Organization_____İ"
    	},
    	cntpos: "ı_Position___İ",
    	cntaddr: {
    		caption: "ı_Address___İ",
    		addrtype: {
    			caption: "ı_Address Type_____İ",
    			mailing: "ı_Mailing___İ",
    			physical: "ı_Physical___İ",
    			mailingAndPhysical: "ı_Mailing and Physical_______İ"
    		},
    		address: "ı_Address___İ",
    		city: "ı_City__İ",
    		state: "ı_State___İ",
    		postal: "ı_Postal Code____İ",
    		country: "ı_Country___İ"
    	},
    	cntvoice: "ı_Voice___İ",
    	cnttdd: "ı_TDD/TTY Telephone (hearing impaired)____________İ",
    	cntfax: "ı_Fax__İ",
    	cntemail: "ı_E-Mail Address_____İ",
    	hours: "ı_Hours___İ",
    	cntinst: "ı_Instructions_____İ"
    },
    
    dataqual: {
    	caption: "ı_Data Quality Information________İ",
    	section: {
    		attributeAccuracy: "ı_Attribute Accuracy______İ",
    		logicalConsistency: "ı_Logical Consistency_______İ",
    		completeness: "ı_Completeness_____İ",
    		positionalAccuracy: "ı_Positional Accuracy_______İ",
    		lineage: "ı_Lineage___İ",
    		cloudCover: "ı_Cloud Cover____İ"
    	},
    	attracc: {
    		caption: "ı_Attribute Accuracy______İ",
    		attraccr: "ı_Attribute Accuracy Report_________İ",
    		qattracc: {
    			caption: "ı_Quantitative Attribute Accuracy Assessment______________İ",
    			attraccv: "ı_Attribute Accuracy Value________İ",
    			attracce: "ı_Attribute Accuracy Explanation__________İ"
    		}
    	},
    	logic: "ı_Logical Consistency Report_________İ",
    	complete: "ı_Completeness Report_______İ",
    	posacc: "ı_Positional Accuracy_______İ",
    	horizpa: {
    		caption: "ı_Horizontal Positional Accuracy__________İ",
    		horizpar: "ı_Horizontal Positional Accuracy Report____________İ",
    		qhorizpa: {
    			caption: "ı_Quantitative Horizontal Positional Accuracy Assessment_________________İ",
    			horizpav: "ı_Horizontal Positional Accuracy Value____________İ",
    			horizpae: "ı_Horizontal Positional Accuracy Explanation______________İ"
    		}
    	},
    	vertacc: {
    		caption: "ı_Vertical Positional Accuracy_________İ",
    		vertaccr: "ı_Vertical Positional Accuracy Report____________İ",
    		qvertpa: {
    			caption: "ı_Quantitative Vertical Positional Accuracy Assessment_________________İ",
    			vertaccv: "ı_Vertical Positional Accuracy Value___________İ",
    			vertacce: "ı_Vertical Positional Accuracy Explanation_____________İ"
    		}
    	},
    	lineage: {
    		caption: "ı_Lineage___İ"
    	},
    	srcinfo: {
    		caption: "ı_Source Information______İ",
    		srccite: "ı_Source Citation______İ",
    		srcscale: "ı_Source Scale Denominator________İ",
    		typesrc: {
    			caption: "ı_Type of Source Media_______İ",
    			paper: "ı_Paper___İ",
    			stableBaseMaterial: "ı_Stable-base material_______İ",
    			microfiche: "ı_Microfiche____İ",
    			microfilm: "ı_Microfilm____İ",
    			audiocassette: "ı_Audio cassette_____İ",
    			chart: "ı_Chart___İ",
    			filmstrip: "ı_Film strip____İ",
    			transparency: "ı_Transparency_____İ",
    			videocassette: "ı_Video cassette_____İ",
    			videodisc: "ı_Video disc____İ",
    			videotape: "ı_Video tape____İ",
    			physicalModel: "ı_Physical model_____İ",
    			computerProgram: "ı_Computer program______İ",
    			disc: "ı_Disc__İ",
    			cartridgeTape: "ı_Cartridge tape_____İ",
    			magneticTape: "ı_Magnetic tape_____İ",
    			online: "ı_Online___İ",
    			cdrom: "ı_CD-ROM___İ",
    			electronicBulletinBoard: "ı_Electronic bulletin board_________İ",
    			electronicMailSystem: "ı_Electronic mail system________İ"
    		},
    		srctime: "ı_Source Time Period of Content__________İ",
    		srccurr: "ı_Source Currentness Reference_________İ",
    		srccitea: "ı_Source Citation Abbreviation_________İ",
    		srccontr: "ı_Source Contribution_______İ"
    	},
    	procstep: {
    		caption: "ı_Process Step_____İ",
    		procdesc: "ı_Process Description_______İ",
    		srcused: "ı_Source Used Citation Abbreviation___________İ",
    		procdate: "ı_Process Date_____İ",
    		proctime: "ı_Process Time_____İ",
    		srcprod: "ı_Source Produced Citation Abbreviation____________İ",
    		proccont: "ı_Process Contact______İ"
    	},
    	cloud: "ı_Cloud Cover____İ"
    },
    
    distinfo: {
    	caption: "ı_Distribution Information________İ",
    	section: {
    		distributor: "ı_Distributor____İ",
    		description: "ı_Description____İ",
    		orderProcess: "ı_Order Process_____İ",
    		prerequisites: "ı_Prerequisites_____İ",
    		availability: "ı_Availability_____İ"
    	},
    	distrib: "ı_Distributor____İ",
    	resdesc: {
    		caption: "ı_Resource Description_______İ",
    		liveData: "ı_Live Data and Maps______İ",
    		downloadableData: "ı_Downloadable Data______İ",
    		offlineData: "ı_Offline Data_____İ",
    		staticMapImages: "ı_Static Map Images______İ",
    		sDocument: "ı_Other Documents______İ",
    		application: "ı_Applications_____İ",
    		geographicService: "ı_Geographic Services_______İ",
    		clearingHouse: "ı_Clearinghouses_____İ",
    		mapFiles: "ı_Map Files____İ",
    		geographicActivies: "ı_Geographic Activities_______İ"
    	},
    	distliab: "ı_Distribution Liability Statement___________İ",
    	custom: "ı_Custom Order Process_______İ",
    	techpreq: "ı_Technical Prerequisites________İ",
    	availabl: "ı_Availability_____İ"
    },
    
    eainfo: {
    	caption: "ı_Entity and Attribute Information___________İ",
    	overview: "ı_Overview Description_______İ",
    	eaover: "ı_Entity and Attribute Overview__________İ",
    	eadetcit: "ı_Entity and Attribute Detail Citation____________İ"
    },
    
    idinfo: {
    	caption: "ı_Identification Information_________İ",
    	section: {
    		timeAndStatus: "ı_Time and Status______İ",
    		constraints: "ı_Constraints____İ",
    		contact: "ı_Contact___İ",
    		additional: "ı_Additional____İ"
    	},
    	citeinfo: "ı_Citation___İ",
    	descript: {
    		caption: "ı_Description____İ",
    		sAbstract: "ı_Abstract___İ",
    		purpose: "ı_Purpose___İ",
    		supplinf: "ı_Supplemental Information________İ"
    	},
    	timeperd: {
    		caption: "ı_Time Period of Content________İ",
    		current: {
    			caption: "ı_Currentness Reference_______İ",
    			groundCondition: "ı_Ground Condition______İ",
    			publicationDate: "ı_Publication Date______İ"
    		}
    	},
    	status: {
    		caption: "ı_Status___İ",
    		progress: {
    			caption: "ı_Progress___İ",
     			complete: "ı_Complete___İ",
    			inWork: "ı_In work___İ",
    			planned: "ı_Planned___İ"
    		},
    		update: {
    			caption: "ı_Maintenance and Update Frequency___________İ",
    			continual: "ı_Continual____İ",
    			daily: "ı_Daily___İ",
    			weekly: "ı_Weekly___İ",
    			monthly: "ı_Monthly___İ",
    			annually: "ı_Annually___İ",
    			unknown: "ı_Unknown___İ",
    			asNeeded: "ı_As needed____İ",
    			irregular: "ı_Irregular____İ",
    			nonePlanned: "ı_None planned_____İ"
    		}
    	},
    	spdom: {
    		caption: "ı_Extent___İ",
    		bounding: {
    			caption: "ı_Bounding Coordinates_______İ",
    			westbc: "ı_West Bounding Longitude________İ",
    			eastbc: "ı_East Bounding Longitude________İ",
    			northbc: "ı_North Bounding Latitude________İ",
    			southbc: "ı_South Bounding Latitude________İ"
    		}
    	},
      keywords: {
        caption: "Anahtar Kelimeler",
        theme: "Tema",
        place: "Yer",
        stratum: "Katman",
        temporal: "Zamansal",
        thesaursus: "İlişkili Eşanlamlı Sözlüğü",
        delimited: "Anahtar Kelimeler",
        themektIsoTopicCategory: "ISO Konu Başlığı...",
        themektIsoTopicDialog: "ISO Konu Başlığı",
        placektGnis: "Coğrafi Ad Bilgi Sistemi"
      },
      accconst: "Erişim Kısıtlamaları",
      useconst: "Kısıtlama Kullan",
      ptcontac: "Kaynak Temas Noktası",
      browse: {
      	caption: "ı_Browse Graphic_____İ",
      	browsen: "ı_Browse Graphic URL______İ",
      	browsed: "ı_Browse Graphic File Description__________İ",
      	browset: "ı_Browse Graphic File Type________İ"
      },
      datacred: "Veri Kümesi Kredisi",
      secinfo: {
      	caption: "ı_Security Information_______İ",
      	secsys: "ı_Security Classification System__________İ",
      	secclass: {
      		caption: "ı_Security Classification________İ",
      		topSecret: "ı_Top secret____İ",
      		secret: "ı_Secret___İ",
      		confidential: "ı_Confidential_____İ",
      		restricted: "ı_Restricted____İ",
      		unclassified: "ı_Unclassified_____İ",
      		sensitive: "ı_Sensitive____İ"
      	},
      	sechandl: "ı_Security Handling Description__________İ"
      },
      sNative: "Yerel Veri Kümesi Ortamı",
      crossref: "Çapraz Kaynak"
    },
    
    metadata: {
    	idinfo: "ı_Identification_____İ",
    	dataqual: "ı_Quality___İ",
    	spdoinfo: "ı_Spatial Data Organization_________İ",
    	spref: "ı_Spatial Reference______İ",
    	eainfo: "ı_Entity and Attribute_______İ",
    	distinfo: "ı_Distribution_____İ",
    	metainfo: "ı_Metadata___İ"
    },
    
    metainfo: {
    	caption: "ı_Metadata Information_______İ",
    	section: {
    		dates: "ı_Metadata Dates_____İ",
    		contact: "ı_Metadata Contact______İ",
    		standard: "ı_Metadata Standard______İ",
    		additional: "ı_Additional____İ"
    	},
      metd: "Meta veri Tarihi",
      metrd: "Meta veri İnceleme Tarihi",
      metfrd: "Metaveri Gelecek İnceleme Tarihi",
      metstdn: "Meta veri Standart Adı",
      metstdv: "Meta veri Standart Sürümü",
      metac: "Meta veri Erişim Kısıtlamaları",
      metuc: "Meta veri Kullanım Kısıtlamaları",
      metsi: {
      	caption: "ı_Metadata Security Information__________İ",
      	metscs: "ı_Metadata Security Classification System_____________İ",
      	metsc: "ı_Metadata Security Classification___________İ",
      	metshd: "ı_Metadata Security Handling Description____________İ"
      }
    },
    
    spref: {
    	caption: "ı_Spatial Reference Information__________İ",
    	horizsys: {
    		caption: "ı_Horizontal Coordinate System_________İ",
    		geograph: {
    			caption: "ı_Geographic____İ",
    			latres: "ı_Latitude Resolution_______İ",
    			longres: "ı_Longitude Resolution_______İ",
    			geogunit: {
    				caption: "ı_Geographic Coordinate Units_________İ",
    				decimalDegrees: "ı_Decimal degrees______İ",
    				decimalMinutes: "ı_Decimal minutes______İ",
    				decimalSeconds: "ı_Decimal seconds______İ",
    				degreesAndDecimalMinutes: "ı_Degrees and decimal minutes_________İ",
    				degreesMinutesAndDecimalSeconds: "ı_Degrees, minutes, and decimal seconds____________İ",
    				radians: "ı_Radians___İ",
    				grads: "ı_Grads___İ"
    			}
    		},
    		planar: {
    			caption: "ı_Planar___İ"
    		},
    		local: {
    			caption: "ı_Local___İ",
    			localdes: "ı_Local Description______İ",
    			localgeo: "ı_Local Georeference Information__________İ"
    		},
    		geodetic: {
    			caption: "ı_Geodetic Model_____İ",
    			horizdn: {
    				caption: "ı_Horizontal Datum Name_______İ",
    				nad83: "ı_North American Datum of 1983_________İ",
    				nad27: "ı_North American Datum of 1927_________İ"
    			},
    			ellips: {
    				caption: "ı_Ellipsoid Name_____İ",
    				grs80: "ı_Geodetic Reference System 80_________İ",
    				clarke1866: "ı_Clarke 1866____İ"
    			},
    			semiaxis: "ı_Semi-major Axis______İ",
    			denflat: "ı_Denominator of Flattening Ratio__________İ"
    		}
    	},
    	vertdef: {
    		caption: "ı_Vertical Coordinate System_________İ",
    		altsys: {
    			caption: "ı_Altitude System______İ",
    			altdatum: {
    				caption: "ı_Altitude Datum Name_______İ",
    				navd88: "ı_North American Vertical Datum of 1988____________İ",
    				ngvd29: "ı_National Geodetic Vertical Datum of 1929_____________İ"
    			},
    			altres: "ı_Altitude Resolution_______İ",
    			altunits: {
    				caption: "ı_Altitude Distance Units________İ",
    				meters: "ı_Meters___İ",
    				feet: "ı_Feet__İ"
    			},
    			altenc: {
    				caption: "ı_Altitude Encoding Method________İ",
    				explicit: "ı_Explicit elevation coordinate included with horizontal coordinates_____________________İ",
    				implicit: "ı_Implicit coordinate_______İ",
    				attribute: "ı_Attribute values______İ"
    			}
    		},
    		depthsys: {
    			caption: "ı_Depth System_____İ",
    			depthdn: {
    				caption: "ı_Depth Datum Name______İ",
    				option1: "ı_Local surface_____İ", 
    				option2: "ı_Chart datum; datum for sounding reduction_____________İ", 
    				option3: "ı_Lowest astronomical tide________İ", 
    				option4: "ı_Highest astronomical tide_________İ", 
    				option5: "ı_Mean low water_____İ", 
    				option6: "ı_Mean high water______İ", 
    				option7: "ı_Mean sea level_____İ", 
    				option8: "ı_Land survey datum______İ", 
    				option9: "ı_Mean low water springs________İ", 
    				option10: "ı_Mean high water springs________İ", 
    				option11: "ı_Mean low water neap_______İ", 
    				option12: "ı_Mean high water neap_______İ", 
    				option13: "ı_Mean lower low water_______İ", 
    				option14: "ı_Mean lower low water springs_________İ", 
    				option15: "ı_Mean higher high water________İ", 
    				option16: "ı_Mean higher low water_______İ", 
    				option17: "ı_Mean lower high water_______İ", 
    				option18: "ı_Spring tide____İ", 
    				option19: "ı_Tropic lower low water________İ", 
    				option20: "ı_Neap tide____İ", 
    				option21: "ı_High water____İ", 
    				option22: "ı_Higher high water______İ", 
    				option23: "ı_Low water____İ", 
    				option24: "ı_Low-water datum______İ", 
    				option25: "ı_Lowest low water______İ", 
    				option26: "ı_Lower low water______İ", 
    				option27: "ı_Lowest normal low water________İ", 
    				option28: "ı_Mean tide level______İ", 
    				option29: "ı_Indian spring low water________İ", 
    				option30: "ı_High-water full and charge_________İ", 
    				option31: "ı_Low-water full and charge_________İ", 
    				option32: "ı_Columbia River datum_______İ", 
    				option33: "ı_Gulf Coast low water datum_________İ", 
    				option34: "ı_Equatorial springs low water_________İ", 
    				option35: "ı_Approximate lowest astronomical tide____________İ", 
    				option36: "ı_No correction_____İ"
    			},
    			depthres: "ı_Depth Resolution______İ",
    			depthdu: {
    				caption: "ı_Depth Distance Units_______İ",
    				meters: "ı_Meters___İ",
    				feet: "ı_Feet__İ"
    			},   			
    			depthem: {
    				caption: "ı_Depth Encoding Method_______İ",
    				explicit: "ı_Explicit depth coordinate included with horizontal coordinates____________________İ",
    				implicit: "ı_Implicit coordinate_______İ",
    				attribute: "ı_Attribute values______İ"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "ı_Time Period Information________İ",
    	sngdate: "ı_Single Date____İ",
    	mdattim: "ı_Multiple Dates_____İ",
    	rngdates: "ı_Date Range____İ",
    	caldate: "ı_Date__İ",
    	time: "ı_Time__İ",
    	begdate: "ı_Beginning Date_____İ",
    	begtime: "ı_Beginning Time_____İ",
    	enddate: "ı_Ending Date____İ",
    	endtime: "ı_Ending Time____İ"
    }
   
  })
);
