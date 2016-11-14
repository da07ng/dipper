define(
   ({
  	
    documentTypes: {
    	fgdc: {
    		caption: "Š_FGDC__ä",
    		description: ""
    	}
    },
        
    alternates: {
    	none: "Š_None__ä",
    	notComplete: "Š_Not complete_____ä",
    	other: "Š_Other___ä",
    	present: "Š_Present___ä",
    	unknown: "Š_Unknown___ä",
    	unpublishedMaterial: "Š_Unpublished material_______ä"
    },
    
    hints: {
    	integerGreaterThanOne: "Š_(enter an integer > 1)________ä",
    	integer0To100: "Š_(enter an integer 0..100)_________ä"
    },
    
    citeinfo: {
    	caption: "Š_Citation Information_______ä",
    	origin: "Š_Originator____ä",
    	pubdate: "Š_Publication Date______ä",
    	pubtime: "Š_Publication Time______ä",
    	title: "Š_Title___ä",
    	edition: "Š_Edition___ä",
    	geoform: {
    		caption: "Š_Geospatial Data Presentation Form___________ä",
    		atlas: "Š_Atlas___ä",
    		audio: "Š_Audio___ä",
    		diagram: "Š_Diagram___ä",
    		sDocument: "Š_Document___ä",
    		globe: "Š_Globe___ä",
    		map: "Š_Map__ä",
    		model: "Š_Model___ä",
    		multiMediaPresentation: "Š_Multimedia presentation________ä",
    		profile: "Š_Profile___ä",
    		rasterDigitalData: "Š_Raster digital data_______ä",
    		remoteSensingImage: "Š_Remote-sensing image_______ä",
    		section: "Š_Section___ä",
    		spreadsheet: "Š_Spreadsheet____ä",
    		tabularDigitalData: "Š_Tabular digital data_______ä",
    		vectorDigitalData: "Š_Vector digital data_______ä",
    		video: "Š_Video___ä",
    		view: "Š_View__ä"
    	},
    	serinfo: {
    		caption: "Š_Series Information______ä",
    		sername: "Š_Series Name____ä",
    		issue: "Š_Issue Identification_______ä"
    	},
    	pubinfo: {
    		caption: "Š_Publication Information________ä",
    		pubplace: "Š_Publication Place______ä",
    		publish: "Š_Publisher____ä"
    	},
    	othercit: "Š_Other Citation Details________ä",
    	onlink: "Š_Online Linkage (URL)_______ä"
    },
    
    cntinfo: {
    	caption: "Š_Contact Information_______ä",
    	section: {
    		primary: "Š_Primary___ä",
    		phoneAndEmail: "Š_Phone and E-Mail______ä",
    		hoursAndInstructions: "Š_Hours and Instructions________ä"
    	},
    	cntorgp: {
    		caption: "Š_By organization______ä",
    		cntorg: "Š_Organization_____ä",
    		cntper: "Š_Person___ä"
    	},
    	cntperp: {
    		caption: "Š_By person____ä",
    		cntper: "Š_Person___ä",
    		cntorg: "Š_Organization_____ä"
    	},
    	cntpos: "Š_Position___ä",
    	cntaddr: {
    		caption: "Š_Address___ä",
    		addrtype: {
    			caption: "Š_Address Type_____ä",
    			mailing: "Š_Mailing___ä",
    			physical: "Š_Physical___ä",
    			mailingAndPhysical: "Š_Mailing and Physical_______ä"
    		},
    		address: "Š_Address___ä",
    		city: "Š_City__ä",
    		state: "Š_State___ä",
    		postal: "Š_Postal Code____ä",
    		country: "Š_Country___ä"
    	},
    	cntvoice: "Š_Voice___ä",
    	cnttdd: "Š_TDD/TTY Telephone (hearing impaired)____________ä",
    	cntfax: "Š_Fax__ä",
    	cntemail: "Š_E-Mail Address_____ä",
    	hours: "Š_Hours___ä",
    	cntinst: "Š_Instructions_____ä"
    },
    
    dataqual: {
    	caption: "Š_Data Quality Information________ä",
    	section: {
    		attributeAccuracy: "Š_Attribute Accuracy______ä",
    		logicalConsistency: "Š_Logical Consistency_______ä",
    		completeness: "Š_Completeness_____ä",
    		positionalAccuracy: "Š_Positional Accuracy_______ä",
    		lineage: "Š_Lineage___ä",
    		cloudCover: "Š_Cloud Cover____ä"
    	},
    	attracc: {
    		caption: "Š_Attribute Accuracy______ä",
    		attraccr: "Š_Attribute Accuracy Report_________ä",
    		qattracc: {
    			caption: "Š_Quantitative Attribute Accuracy Assessment______________ä",
    			attraccv: "Š_Attribute Accuracy Value________ä",
    			attracce: "Š_Attribute Accuracy Explanation__________ä"
    		}
    	},
    	logic: "Š_Logical Consistency Report_________ä",
    	complete: "Š_Completeness Report_______ä",
    	posacc: "Š_Positional Accuracy_______ä",
    	horizpa: {
    		caption: "Š_Horizontal Positional Accuracy__________ä",
    		horizpar: "Š_Horizontal Positional Accuracy Report____________ä",
    		qhorizpa: {
    			caption: "Š_Quantitative Horizontal Positional Accuracy Assessment_________________ä",
    			horizpav: "Š_Horizontal Positional Accuracy Value____________ä",
    			horizpae: "Š_Horizontal Positional Accuracy Explanation______________ä"
    		}
    	},
    	vertacc: {
    		caption: "Š_Vertical Positional Accuracy_________ä",
    		vertaccr: "Š_Vertical Positional Accuracy Report____________ä",
    		qvertpa: {
    			caption: "Š_Quantitative Vertical Positional Accuracy Assessment_________________ä",
    			vertaccv: "Š_Vertical Positional Accuracy Value___________ä",
    			vertacce: "Š_Vertical Positional Accuracy Explanation_____________ä"
    		}
    	},
    	lineage: {
    		caption: "Š_Lineage___ä"
    	},
    	srcinfo: {
    		caption: "Š_Source Information______ä",
    		srccite: "Š_Source Citation______ä",
    		srcscale: "Š_Source Scale Denominator________ä",
    		typesrc: {
    			caption: "Š_Type of Source Media_______ä",
    			paper: "Š_Paper___ä",
    			stableBaseMaterial: "Š_Stable-base material_______ä",
    			microfiche: "Š_Microfiche____ä",
    			microfilm: "Š_Microfilm____ä",
    			audiocassette: "Š_Audio cassette_____ä",
    			chart: "Š_Chart___ä",
    			filmstrip: "Š_Film strip____ä",
    			transparency: "Š_Transparency_____ä",
    			videocassette: "Š_Video cassette_____ä",
    			videodisc: "Š_Video disc____ä",
    			videotape: "Š_Video tape____ä",
    			physicalModel: "Š_Physical model_____ä",
    			computerProgram: "Š_Computer program______ä",
    			disc: "Š_Disc__ä",
    			cartridgeTape: "Š_Cartridge tape_____ä",
    			magneticTape: "Š_Magnetic tape_____ä",
    			online: "Š_Online___ä",
    			cdrom: "Š_CD-ROM___ä",
    			electronicBulletinBoard: "Š_Electronic bulletin board_________ä",
    			electronicMailSystem: "Š_Electronic mail system________ä"
    		},
    		srctime: "Š_Source Time Period of Content__________ä",
    		srccurr: "Š_Source Currentness Reference_________ä",
    		srccitea: "Š_Source Citation Abbreviation_________ä",
    		srccontr: "Š_Source Contribution_______ä"
    	},
    	procstep: {
    		caption: "Š_Process Step_____ä",
    		procdesc: "Š_Process Description_______ä",
    		srcused: "Š_Source Used Citation Abbreviation___________ä",
    		procdate: "Š_Process Date_____ä",
    		proctime: "Š_Process Time_____ä",
    		srcprod: "Š_Source Produced Citation Abbreviation____________ä",
    		proccont: "Š_Process Contact______ä"
    	},
    	cloud: "Š_Cloud Cover____ä"
    },
    
    distinfo: {
    	caption: "Š_Distribution Information________ä",
    	section: {
    		distributor: "Š_Distributor____ä",
    		description: "Š_Description____ä",
    		orderProcess: "Š_Order Process_____ä",
    		prerequisites: "Š_Prerequisites_____ä",
    		availability: "Š_Availability_____ä"
    	},
    	distrib: "Š_Distributor____ä",
    	resdesc: {
    		caption: "Š_Resource Description_______ä",
    		liveData: "Š_Live Data and Maps______ä",
    		downloadableData: "Š_Downloadable Data______ä",
    		offlineData: "Š_Offline Data_____ä",
    		staticMapImages: "Š_Static Map Images______ä",
    		sDocument: "Š_Other Documents______ä",
    		application: "Š_Applications_____ä",
    		geographicService: "Š_Geographic Services_______ä",
    		clearingHouse: "Š_Clearinghouses_____ä",
    		mapFiles: "Š_Map Files____ä",
    		geographicActivies: "Š_Geographic Activities_______ä"
    	},
    	distliab: "Š_Distribution Liability Statement___________ä",
    	custom: "Š_Custom Order Process_______ä",
    	techpreq: "Š_Technical Prerequisites________ä",
    	availabl: "Š_Availability_____ä"
    },
    
    eainfo: {
    	caption: "Š_Entity and Attribute Information___________ä",
    	overview: "Š_Overview Description_______ä",
    	eaover: "Š_Entity and Attribute Overview__________ä",
    	eadetcit: "Š_Entity and Attribute Detail Citation____________ä"
    },
    
    idinfo: {
    	caption: "Š_Identification Information_________ä",
    	section: {
    		timeAndStatus: "Š_Time and Status______ä",
    		constraints: "Š_Constraints____ä",
    		contact: "Š_Contact___ä",
    		additional: "Š_Additional____ä"
    	},
    	citeinfo: "Š_Citation___ä",
    	descript: {
    		caption: "Š_Description____ä",
    		sAbstract: "Š_Abstract___ä",
    		purpose: "Š_Purpose___ä",
    		supplinf: "Š_Supplemental Information________ä"
    	},
    	timeperd: {
    		caption: "Š_Time Period of Content________ä",
    		current: {
    			caption: "Š_Currentness Reference_______ä",
    			groundCondition: "Š_Ground Condition______ä",
    			publicationDate: "Š_Publication Date______ä"
    		}
    	},
    	status: {
    		caption: "Š_Status___ä",
    		progress: {
    			caption: "Š_Progress___ä",
     			complete: "Š_Complete___ä",
    			inWork: "Š_In work___ä",
    			planned: "Š_Planned___ä"
    		},
    		update: {
    			caption: "Š_Maintenance and Update Frequency___________ä",
    			continual: "Š_Continual____ä",
    			daily: "Š_Daily___ä",
    			weekly: "Š_Weekly___ä",
    			monthly: "Š_Monthly___ä",
    			annually: "Š_Annually___ä",
    			unknown: "Š_Unknown___ä",
    			asNeeded: "Š_As needed____ä",
    			irregular: "Š_Irregular____ä",
    			nonePlanned: "Š_None planned_____ä"
    		}
    	},
    	spdom: {
    		caption: "Š_Extent___ä",
    		bounding: {
    			caption: "Š_Bounding Coordinates_______ä",
    			westbc: "Š_West Bounding Longitude________ä",
    			eastbc: "Š_East Bounding Longitude________ä",
    			northbc: "Š_North Bounding Latitude________ä",
    			southbc: "Š_South Bounding Latitude________ä"
    		}
    	},
      keywords: {
        caption: "Märksõnad",
        theme: "Teema",
        place: "Koht",
        stratum: "Kiht",
        temporal: "Ajaline",
        thesaursus: "Seotud tesaurus",
        delimited: "Märksõnad",
        themektIsoTopicCategory: "ISO teema...",
        themektIsoTopicDialog: "ISO teema",
        placektGnis: "Geograafiliste nimede infosüsteem"
      },
      accconst: "Juurdepääsupiirang",
      useconst: "Kasuta piiranguid",
      ptcontac: "Ressursi kontakti punkt",
      browse: {
      	caption: "Š_Browse Graphic_____ä",
      	browsen: "Š_Browse Graphic URL______ä",
      	browsed: "Š_Browse Graphic File Description__________ä",
      	browset: "Š_Browse Graphic File Type________ä"
      },
      datacred: "Andmeallika krediit",
      secinfo: {
      	caption: "Š_Security Information_______ä",
      	secsys: "Š_Security Classification System__________ä",
      	secclass: {
      		caption: "Š_Security Classification________ä",
      		topSecret: "Š_Top secret____ä",
      		secret: "Š_Secret___ä",
      		confidential: "Š_Confidential_____ä",
      		restricted: "Š_Restricted____ä",
      		unclassified: "Š_Unclassified_____ä",
      		sensitive: "Š_Sensitive____ä"
      	},
      	sechandl: "Š_Security Handling Description__________ä"
      },
      sNative: "Kohaliku andmestiku keskkond",
      crossref: "Viide"
    },
    
    metadata: {
    	idinfo: "Š_Identification_____ä",
    	dataqual: "Š_Quality___ä",
    	spdoinfo: "Š_Spatial Data Organization_________ä",
    	spref: "Š_Spatial Reference______ä",
    	eainfo: "Š_Entity and Attribute_______ä",
    	distinfo: "Š_Distribution_____ä",
    	metainfo: "Š_Metadata___ä"
    },
    
    metainfo: {
    	caption: "Š_Metadata Information_______ä",
    	section: {
    		dates: "Š_Metadata Dates_____ä",
    		contact: "Š_Metadata Contact______ä",
    		standard: "Š_Metadata Standard______ä",
    		additional: "Š_Additional____ä"
    	},
      metd: "Metaandmete kuupäev",
      metrd: "Metaandmete läbivaatuse kuupäev",
      metfrd: "Metaandmete tulevase läbivaatuse kuupäev",
      metstdn: "Metaandmete standardi nimi",
      metstdv: "Metaandmete standardi versioon",
      metac: "Metaandmete juurdepääsupiirang",
      metuc: "Metaandmete kasutuspiirang",
      metsi: {
      	caption: "Š_Metadata Security Information__________ä",
      	metscs: "Š_Metadata Security Classification System_____________ä",
      	metsc: "Š_Metadata Security Classification___________ä",
      	metshd: "Š_Metadata Security Handling Description____________ä"
      }
    },
    
    spref: {
    	caption: "Š_Spatial Reference Information__________ä",
    	horizsys: {
    		caption: "Š_Horizontal Coordinate System_________ä",
    		geograph: {
    			caption: "Š_Geographic____ä",
    			latres: "Š_Latitude Resolution_______ä",
    			longres: "Š_Longitude Resolution_______ä",
    			geogunit: {
    				caption: "Š_Geographic Coordinate Units_________ä",
    				decimalDegrees: "Š_Decimal degrees______ä",
    				decimalMinutes: "Š_Decimal minutes______ä",
    				decimalSeconds: "Š_Decimal seconds______ä",
    				degreesAndDecimalMinutes: "Š_Degrees and decimal minutes_________ä",
    				degreesMinutesAndDecimalSeconds: "Š_Degrees, minutes, and decimal seconds____________ä",
    				radians: "Š_Radians___ä",
    				grads: "Š_Grads___ä"
    			}
    		},
    		planar: {
    			caption: "Š_Planar___ä"
    		},
    		local: {
    			caption: "Š_Local___ä",
    			localdes: "Š_Local Description______ä",
    			localgeo: "Š_Local Georeference Information__________ä"
    		},
    		geodetic: {
    			caption: "Š_Geodetic Model_____ä",
    			horizdn: {
    				caption: "Š_Horizontal Datum Name_______ä",
    				nad83: "Š_North American Datum of 1983_________ä",
    				nad27: "Š_North American Datum of 1927_________ä"
    			},
    			ellips: {
    				caption: "Š_Ellipsoid Name_____ä",
    				grs80: "Š_Geodetic Reference System 80_________ä",
    				clarke1866: "Š_Clarke 1866____ä"
    			},
    			semiaxis: "Š_Semi-major Axis______ä",
    			denflat: "Š_Denominator of Flattening Ratio__________ä"
    		}
    	},
    	vertdef: {
    		caption: "Š_Vertical Coordinate System_________ä",
    		altsys: {
    			caption: "Š_Altitude System______ä",
    			altdatum: {
    				caption: "Š_Altitude Datum Name_______ä",
    				navd88: "Š_North American Vertical Datum of 1988____________ä",
    				ngvd29: "Š_National Geodetic Vertical Datum of 1929_____________ä"
    			},
    			altres: "Š_Altitude Resolution_______ä",
    			altunits: {
    				caption: "Š_Altitude Distance Units________ä",
    				meters: "Š_Meters___ä",
    				feet: "Š_Feet__ä"
    			},
    			altenc: {
    				caption: "Š_Altitude Encoding Method________ä",
    				explicit: "Š_Explicit elevation coordinate included with horizontal coordinates_____________________ä",
    				implicit: "Š_Implicit coordinate_______ä",
    				attribute: "Š_Attribute values______ä"
    			}
    		},
    		depthsys: {
    			caption: "Š_Depth System_____ä",
    			depthdn: {
    				caption: "Š_Depth Datum Name______ä",
    				option1: "Š_Local surface_____ä", 
    				option2: "Š_Chart datum; datum for sounding reduction_____________ä", 
    				option3: "Š_Lowest astronomical tide________ä", 
    				option4: "Š_Highest astronomical tide_________ä", 
    				option5: "Š_Mean low water_____ä", 
    				option6: "Š_Mean high water______ä", 
    				option7: "Š_Mean sea level_____ä", 
    				option8: "Š_Land survey datum______ä", 
    				option9: "Š_Mean low water springs________ä", 
    				option10: "Š_Mean high water springs________ä", 
    				option11: "Š_Mean low water neap_______ä", 
    				option12: "Š_Mean high water neap_______ä", 
    				option13: "Š_Mean lower low water_______ä", 
    				option14: "Š_Mean lower low water springs_________ä", 
    				option15: "Š_Mean higher high water________ä", 
    				option16: "Š_Mean higher low water_______ä", 
    				option17: "Š_Mean lower high water_______ä", 
    				option18: "Š_Spring tide____ä", 
    				option19: "Š_Tropic lower low water________ä", 
    				option20: "Š_Neap tide____ä", 
    				option21: "Š_High water____ä", 
    				option22: "Š_Higher high water______ä", 
    				option23: "Š_Low water____ä", 
    				option24: "Š_Low-water datum______ä", 
    				option25: "Š_Lowest low water______ä", 
    				option26: "Š_Lower low water______ä", 
    				option27: "Š_Lowest normal low water________ä", 
    				option28: "Š_Mean tide level______ä", 
    				option29: "Š_Indian spring low water________ä", 
    				option30: "Š_High-water full and charge_________ä", 
    				option31: "Š_Low-water full and charge_________ä", 
    				option32: "Š_Columbia River datum_______ä", 
    				option33: "Š_Gulf Coast low water datum_________ä", 
    				option34: "Š_Equatorial springs low water_________ä", 
    				option35: "Š_Approximate lowest astronomical tide____________ä", 
    				option36: "Š_No correction_____ä"
    			},
    			depthres: "Š_Depth Resolution______ä",
    			depthdu: {
    				caption: "Š_Depth Distance Units_______ä",
    				meters: "Š_Meters___ä",
    				feet: "Š_Feet__ä"
    			},   			
    			depthem: {
    				caption: "Š_Depth Encoding Method_______ä",
    				explicit: "Š_Explicit depth coordinate included with horizontal coordinates____________________ä",
    				implicit: "Š_Implicit coordinate_______ä",
    				attribute: "Š_Attribute values______ä"
    			}
    		}
    	}
    },
    
    timeinfo: {
    	caption: "Š_Time Period Information________ä",
    	sngdate: "Š_Single Date____ä",
    	mdattim: "Š_Multiple Dates_____ä",
    	rngdates: "Š_Date Range____ä",
    	caldate: "Š_Date__ä",
    	time: "Š_Time__ä",
    	begdate: "Š_Beginning Date_____ä",
    	begtime: "Š_Beginning Time_____ä",
    	enddate: "Š_Ending Date____ä",
    	endtime: "Š_Ending Time____ä"
    }
   
  })
);
